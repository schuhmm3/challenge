const Router = require("express").Router();

const chemicalController = require("../controllers/chemicalController");

/** CHEMICAL DATA ROUTES */
Router.route("/api/chemical_type/").get(chemicalController.getAllChemicalDocsByType);
Router.route("/api/chemical_type_2/").get(chemicalController.getAllChemicalDocsByType2);
Router.route("/api/chemical_type/name/").get(chemicalController.getChemicalDocsByType1);
Router.route("/api/chemical_type_2/name/").get(chemicalController.getChemicalDocsByType2);
Router.route("/api/data").get(chemicalController.getAllChemicalData);

module.exports = Router;