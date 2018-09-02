const restful = require('node-restful')
const mongoose = restful.mongoose

const instituicao = new mongoose.Schema({
    nome: { type: String, required: true },
    usuarioNome: { type: String, required: true },
    usuario: { type: String, required: true },
    supervisores: [{ type: String }]
})

module.exports = restful.model('Instituicao', instituicao)
