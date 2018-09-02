const express = require('express')
const passwordHash = require('password-hash')

module.exports = function(server) {
    
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //User
    const user = require('../api/user/userService')
    user.register(router, '/user')

    //Image
    const image = require('../api/image/imageService')
    image.register(router, '/image')

    //Estagio
    const estagio = require('../api/estagio/estagioService')
    estagio.register(router, '/estagio')

    //Documento
    const documento = require('../api/documento/documentoService')
    documento.register(router, '/documento')

    //Instituicao
    const instituicao = require('../api/instituicao/instituicaoService')
    instituicao.register(router, '/instituicao')

    //Custom routes
    
    //Compare password
    router.get('/compare/:hash/:password', function(req, res, next) { 
        const password = req.params.password;
        const hash = req.params.hash;
        const resp = passwordHash.verify(password, hash);

        res.json({
            resp: resp
        })
    }); 
}