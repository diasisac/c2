const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    date_create:{
        type: Date,
    },
    date_update:{
        type: Date,
    },
    date_delete:{
        type: Date,
    }
});

let pessoa = module.exports  = mongoose.model('pessoa', PessoaSchema);

module.exports.get = (callback,limit) => {
    pessoa.find(callback).limit(limit);
}