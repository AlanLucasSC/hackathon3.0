const Instituicao = require('./instituicao')

Instituicao.methods(['get', 'post', 'put', 'patch', 'delete'])
Instituicao.updateOptions({new: true, runValidators: true})

module.exports = Instituicao