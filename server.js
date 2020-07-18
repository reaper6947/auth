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




const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log("Server started on port " + PORT));
