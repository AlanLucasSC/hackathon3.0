const restful = require('node-restful')
const passwordHash = require('password-hash')
const uniqueValidator = require('mongoose-unique-validator');
const mongoose = restful.mongoose


const user = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nome: { type: String },
    cargo: { type: String },
    rg: { type: String },
})

user.pre('save', function(next) {
    const user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    //generate a hash
    const hash = passwordHash.generate(user.password);
    user.password = hash;

    next();
});

user.plugin(uniqueValidator, { message: 'Erro, já existe um email: {PATH}.' })

module.exports = restful.model('User', user)