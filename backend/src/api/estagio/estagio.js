const restful = require('node-restful')
const mongoose = restful.mongoose

const estagio = new mongoose.Schema({
    processo: { type: String, required: true },
    protocolo: { type: String, required: true },
    categoria: { type: String, required: true },
    estagiario: { type: String, required: true },
    instituicao: { type: String, required: true },
    supervisor: { type: String, required: true },
    validado: { type: String, required: true, default: 'TRUE', uppercase: true, enum: ['TRUE', 'FALSE'] },
})

module.exports = restful.model('Estagio', estagio) 
