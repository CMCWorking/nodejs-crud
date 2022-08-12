require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./src/config/config");
const router = require("./src/routes/router");
const pug = require("pug");

const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const port = config.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
