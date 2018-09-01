const Estagio = require('./estagio')

Estagio.methods(['get', 'post', 'put', 'patch', 'delete'])
Estagio.updateOptions({new: true, runValidators: true})

module.exports = Estagio