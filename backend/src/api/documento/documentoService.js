const Documento = require('./documento')

Documento.methods(['get', 'post', 'put', 'patch', 'delete'])
Documento.updateOptions({new: true, runValidators: true})

module.exports = Documento