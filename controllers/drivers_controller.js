const Driver = require("../models/driver");

module.exports = {
  sanityCheck(req, res) {
    res.send({ hi: "there" });
  },

  createDriver(req, res, next) {
    const driverProps = req.body;
    Driver.create(driverProps)
      .then(driver => res.status(200).send(driver))
      .catch(next);
  },

  updateDriver(req, res, next) {
    const { id } = req.params;
    Driver.findByIdAndUpdate({ _id: id }, req.body).then(() =>
      Driver.findById({ _id: id })
        .then(driver => res.status(200).send(driver))
        .catch(next)
    );
  },

  deleteDriver(req, res, next) {
    const { id } = req.params;
    Driver.findByIdAndDelete({ _id: id })
      .then(driver => {
        res.status(204).send(driver);
      })
      .catch(next);
  },

  getAllDrivers(eq, res, next) {
    Driver.find({})
      .then(drivers => {
        res.status(200).send(drivers);
      })
      .catch(next);
  }
};
