const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://isacfrota:xQvdbwL4k8LVkAE7@cluster0.dmksr.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
})

app.use(express.json());
app.use(routes);


app.listen(3333);