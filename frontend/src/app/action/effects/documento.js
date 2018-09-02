import axios from 'axios'
import $ from 'jquery'

URL = "http://virtus.azi.com.br/virtus-rest/v1/arquivos"

export const CriarDocumento = (event) => {

    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])

    reader.onload = (e) => {
        var form = new FormData();
        form.append("", e.target.result);

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://virtus.azi.com.br/virtus-rest/v1/arquivos",
            "method": "POST",
            "headers": {
                "nome": "Termo de Compromisso",
                "mimetype": "application/pdf",
                "numeroprocesso": "0400158016201801",
                "chavecategoria": "[DU_BOM]TERMO_COMPROMISSO",
                "protocolodoc": "288424012018",
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
    /*
    reader.onload = (e) => {
        var formData = new FormData();
        formData.append('', event.target.files[0]);
        console.log(formData)
        return axios({
            method: 'post',
            url: URL,
            data: formData,
            mimeType: "multipart/form-data",
            config: { 
                headers: {
                    'nome': 'Termo de Compromisso',
                    'mimetype': 'application/pdf',
                    'numeroprocesso': '0400158016201801',
                    'chavecategoria': '[DU_BOM]TERMO_COMPROMISSO',
                    'protocolodoc': '288424012018'
                }
            }
        })
        .then(function (resp) {
            //handle success
            console.log(resp);
        })
        .catch(function (err) {
            //handle error
            console.log(err);
        })
    }
    */
}