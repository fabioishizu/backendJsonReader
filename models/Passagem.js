const Sequelize = require("sequelize");
const database = require("../services/db");

const Passagem = database.define("passagem", {
  placa: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  hora: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  equipamento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  faixa: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Passagem;
