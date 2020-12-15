module.exports = app => {
    const chemicalController = require("../controllers/chemicalController");

    /** USER ROUTES */
    app.route("/api/chemical_type_1").get(chemicalController.getAllChemicalTypes_1);
    app.route("/api/chemical_type_1/search/").get(chemicalController.getAllChemicalNames)
  
  };