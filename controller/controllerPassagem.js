const Passagem = require("../models/Passagem");

module.exports = {
  async list(req, res) {
    try {
      const passagem = await Passagem.findAll();
      return res.json(passagem);
    } catch (err) {
      return console.error("Erro na listagem: ", err);
    }
  },
  async show(req, res) {
    try {
      const passagem = await Passagem.findAll({ where: { id: req.params.id } });
      return res.json(passagem);
    } catch (err) {
      return console.err("Erro na busca: ", err);
    }
  },
};
