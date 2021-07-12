const express = require('express');

const User = require('../model.js');

const router = express.Router();

//Cria usuario
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(201).send(user)
    } catch (err) {
        return res.status(400).send({error: 'Falha no Registro'})
    }
})


//Pesquisa usuario pelo Id
router.get("/:id", async function (req, res) {
   
    try {
      const user = await User.findById(req.params.id);
      res.send(user);
    } catch (error) {
      return res.status(400).send({
        error: `Usuario nao encontrado`,
      });
    }
  });


//Pesquisa o Saldo de um usuario
router.get('/saldo/:id', async (req, res) => {
    try {
        const {saldo} = await User.findById(req.params.id)
        return res.send({saldo: saldo})
    } catch (err) {
        return res.status(400).send({error: 'Falha na Pesquisa'})
    }
})


module.exports = app => app.use('/user', router)