const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/routes.js");

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect("mongodb://localhost/muber", { useNewUrlParser: true });
}
// middelware
app.use(bodyParser.json());

// route middleware
routes(app);

// anonymous error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send({error: `Something went wrong: ${err.message}`})
    next()
})

module.exports = app;
