const port = 4009

//Third Party
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const fs = require('fs')
const request = require("request");

//Upload file
const multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'img/')
  },
  filename: function (req, file, cb) {
  	var ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1)
    cb(null, file.fieldname + '-' + Date.now() + '.' + ext)
  }
})

var upload = multer({ storage: storage })

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)


//Application
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

server.post('/file', upload.single('image'), function (req, res, next) {
  /**
   * Upload na api da az
   */
  var options = { 
    method: 'POST',
    url: 'http://virtus.azi.com.br/virtus-rest/v1/arquivos',
    headers: 
    { 
      protocolodoc: req.body.protocolodoc,
      chavecategoria: req.body.chavecategoria,
      numeroprocesso: req.body.numeroprocesso,
      mimetype: req.body.mimetype,
      nome: req.body.nome
    },
    formData: { 
      '': { 
          value: fs.createReadStream(req.file.path),
          options: { 
              filename: 'testePDF.pdf', 
              contentType: null 
          } 
      } 
    } 
  }

  request(options, function (error, response, body) {
    if (error) {
      res.json({
        err: 'Houve algum erro na hora de enviar o documento'
      })
    };

    console.log(body);
  })

	/**
   * Responder o cliente
   */
	res.json({
    image: req.file.path
  })

})

//Deixar acessar a pasta public
server.use('/public', express.static('public/'))
server.use('/img', express.static('img/'))

module.exports = server