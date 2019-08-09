const DCon = require("../controllers/drivers_controller.js");

module.exports = app => {
  // Sanity Check
  app.get("/", DCon.sanityCheck);
  app.post("/api/drivers", DCon.createDriver);
  app.put("/api/drivers/:id", DCon.updateDriver);
  app.delete("/api/drivers/:id", DCon.deleteDriver);
  app.get("/api/drivers", DCon.getAllDrivers);
};
