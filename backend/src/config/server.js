const port = 4009

//Third Party
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const fs = require('fs')
const request = require("request")
const Path = require('path')
const Axios = require('axios')

//Upload file
const multer  = require('multer')

const Documento = require('../api/documento/documento')

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

    Doc = new Documento({
      value: JSON.parse(body).key,
      estagio: req.body.estagio,
      user: req.body.user
    })
    Doc.save()
  })

	/**
   * Responder o cliente
   */
	res.json({
    image: req.file.path
  })

})

server.get('/download/:arquivo', function (req, res, next) {
  var arquivo = req.params.arquivo;
  console.log(arquivo)
  console.log('C:/Users/andre/Documents/Hachathon/hackathon3.0/backend')
  console.log('C:\Users\andre\Documents\Hachathon\hackathon3.0\backend')

  const url = 'http://virtus.azi.com.br/virtus-rest/v1/arquivos?chave=cb1f5a1d-87e0-4c44-88f9-dde868a9a912'
  const newName = Date.now()+'.pdf'
  const path = Path.resolve('C:/Users/andre/Documents/Hachathon/hackathon3.0/backend', 'public', newName)

  const response = Axios({
      method: 'GET',
      url: url,
      responseType: 'stream'
  }).then(
      function(response) {
          response.data.pipe(fs.createWriteStream(path))
      }
  )

  /**
   * Responder o cliente
   */
	res.json({
    path: newName
  })
})

//Deixar acessar a pasta public
server.use('/public', express.static('public/'))
server.use('/img', express.static('img/'))

module.exports = server