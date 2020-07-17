const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const Joi = require('@hapi/joi');
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser')


//settings templating engine and views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/views"));

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser(process.env.SECRET_SALT));


//mongodb connection 
/*
mongoose.connect(
  process.env.DBURL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => console.log("mongodb connected",err)
);
*/
//register route 
app.get('/api/register', (req, res) => {
  
  
  res.render("register");
});


app.post('/api/register',async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  res.send("registered")
});












const users = []

app.get('/users', (req, res) => {
  res.json(users)
})

app.post('/users', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { name: req.body.name, password: hashedPassword }
    users.push(user)
    res.status(201).send()
  } catch {
    res.status(500).send()
  }
})

app.post('/users/login', async (req, res) => {
  const user = users.find(user => user.name === req.body.name)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await bcrypt.compare(req.body.password, user.password)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})




const PORT = 3000 || process.env.PORT;
app.listen(PORT,()=> console.log("Server started on port " + PORT));