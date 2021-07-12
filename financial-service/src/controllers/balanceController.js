const express = require('express');

const User = require('../../../user-service/src/model');

const router = express.Router();

//Realiza transacoes e altera o saldo do usuario
router.put("/:id", async function (req, res) {
   
    try {
      const user = await User.findById(req.params.id);
      const userSaldo = user.saldo
      const {valor, tipo} = req.body;
      
      if (tipo==="credito"){
        saldo = userSaldo+valor;
      } else if (tipo==="debito"){
        saldo = userSaldo-valor
        if (saldo<0){
          return res.status(412).send({error:'Transacao nao autorizada.'})
        }
      }

      user.saldo=saldo
      user.save()
      return res.status(201).send(user);

    } catch (error) {
      return res.status(400).send({
        error: `Usuario nao encontrado`,
      });
    }
  });


module.exports = app => app.use('/transacao', router)