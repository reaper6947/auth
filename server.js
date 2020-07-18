const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const bodyParser = require("body-parser");

//settings templating engine and views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/views"));

//mongodb connection
require("./db")();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser(process.env.SECRET_SALT));

//registration route
app.use("/api", require("./routes/registration"));

// login route
app.use("/api", require("./routes/login"));


/*
const users = [];
app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch {
    res.status(500).send();
  }
});
*/

app.post("/users/login", async (req, res) => {
  try {
    const user = await user.findOne({ username: req.body.username });
    if (user == null) {
      return res.status(400).send("Cannot find user");
    } else {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.send("Success");
      } else {
        res.send("Not Allowed");
      }
    }
  } catch {
    res.status(500).send();
  }
});

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log("Server started on port " + PORT));
