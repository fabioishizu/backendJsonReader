const express = require("express");
const PassagemController = require("../controller/controllerPassagem");
const routes = express.Router();

routes.get("/passagems", PassagemController.list);
routes.get("/passagems/:id", PassagemController.show);

module.exports = routes;
