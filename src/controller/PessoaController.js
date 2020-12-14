// store, update, destroy
const mongoose = require("mongoose");
const Pessoa = require('../model/Pessoa');

    exports.index = (request, response) => {
        Pessoa.get((err, pessoa) => {
            if (err) {
                response.json({
                    status: "error",
                    message: err.message
                })
            }
            response.json({
                status: "SUCCESS",
                message: "Pessoas adicionadas com sucesso!",
                dados: pessoa
            })
        })
    };
    
    exports.store = (request, response) => {
        let pessoa = new Pessoa();
        pessoa.name = request.body.name ? request.body.name : pessoa.name;
        pessoa.email = request.body.email;
        pessoa.latitude = request.body.latitude;
        pessoa.longitude = request.body.longitude;
        pessoa.date_created = new Date();
    
        pessoa.save((err) => {
            if (err) {
                response.json(err);
            }
            response.json({
                message: "Pessoa cadastrada com sucesso!",
                dados: pessoa
            })
        })
    };

    exports.update = (request, response) => {
        Pessoa.findById(request.params.id, (err, pessoa) => {
            if (err) response.send(err);
            pessoa.name = request.body.name;
            pessoa.email = request.body.email;
            pessoa.latitude = request.body.latitude;
            pessoa.longitude = request.body.longitude;
            pessoa.date_updated = new Date();
    
            pessoa.save(err => {
                if (err) response.json(err);
                response.json({
                    message: "Informações alteradas com sucesso!",
                    dados: pessoa
                })
            })
        })
    };
    
    exports.delete = (request, response) => {
        const now = new Date().toISOString();        

        Pessoa.updateOne(
            { _id: request.params.id },
            { active: false, deletedAt: now },
            function (err, result) {
              if (err) {
                return response.json({
                  message: "Problema para deletar pessoa",
                  stack: err,
                  status: false,
                });
              }
              return response.json(result);
            }
          );
    };