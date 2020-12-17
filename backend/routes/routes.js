const Router = require("express").Router();

const chemicalController = require("../controllers/chemicalController");

/** USER ROUTES */
Router.route("/api/chemical_type_1").get(chemicalController.getAllChemicalTypes);

/** Health check **/
Router.route("/api/chemical_type_1/search/").get(chemicalController.getAllChemicalTypesByQueryName);

module.exports = Router;
