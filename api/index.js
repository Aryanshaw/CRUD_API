require("./models/db");

const express = require("express");
const handlebars = require('handlebars')
const employeeController = require("./controllers/employeeController");
const path = require("path");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
var app = express();

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());
app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/",
    handlebars: allowInsecurePrototypeAccess(handlebars)
  })
);
app.set("view engine", "hbs");

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

app.use("/employee", employeeController);
