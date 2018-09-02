const restful = require('node-restful')
const mongoose = restful.mongoose

const documento = new mongoose.Schema({
    value: { type: String, required: true },
    estagio: { type: String, required: true },
    user: { type: String, required: true }
})

module.exports = restful.model('Documento', documento)
