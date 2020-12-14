const express = require('express');
const PessoaController = require('./controller/PessoaController');

const router = require('express').Router();

router.route('/pessoas')
    .get(PessoaController.index)
    .post(PessoaController.store);


router.route('/pessoas/:id')
    .patch(PessoaController.update)
    .put(PessoaController.update)
    .delete(PessoaController.delete)

module.exports = router;