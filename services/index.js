(async () => {
  const database = require("./db");
  const Passagem = require("../models/passagem");
  const express = require("express");
  const api = express();  
  const routes = require("./routes");
  const fs = require("fs").promises;
  var cors = require("cors");

  await database.sync();

  async function listFilesFromDir(baseDirectory) {

    let fileName = await fs.readdir(baseDirectory);
    let absolutePath = [];

    for (let k in fileName) {
      absolutePath = baseDirectory + fileName[k];
      const jsonData = require(absolutePath);

      Passagem.create({
        placa: jsonData.Placa,
        data: jsonData.Data,
        hora: jsonData.Hora,
        equipamento: jsonData.Equipamento,
        faixa: jsonData.Faixa,
      });
    }
  }

  api.use(cors());
  api.use(express.json());
  api.use(routes);

  api.listen(3001);

  listFilesFromDir("../../json/");
})();
