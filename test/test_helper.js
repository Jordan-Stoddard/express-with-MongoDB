const mongoose = require("mongoose");

before(done => {
  mongoose.connect("mongodb://localhost/muber_test", {useNewUrlParser: true});
  mongoose.connection
    .once("open", () => done())
    .on("error", () => {
      console.warn("Warning", error);
    });
});

beforeEach(done => {
    const {drivers} = mongoose.connection.collections
    drivers.drop()
    .then(() => done())
    .catch(() => done())
})
