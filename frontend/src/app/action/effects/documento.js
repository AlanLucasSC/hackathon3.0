import axios from 'axios'

const URL = "http://virtus.azi.com.br/virtus-rest/v1/arquivos"
const URL_File = 'http://localhost:4009/file'

export const CriarDocumento = (event) => {
    var bodyFormData = new FormData();
        bodyFormData.set('image', event.target.files[0]);
        bodyFormData.append('protocolodoc', '288424012018');
        bodyFormData.append('chavecategoria', '[DU_BOM]TERMO_COMPROMISSO');
        bodyFormData.append('numeroprocesso', '0400158016201801');
        bodyFormData.append('mimetype', 'application/pdf');
        bodyFormData.append('nome', 'Termo de Compromisso');
        bodyFormData.append('estagio', 'NUMERO');
        bodyFormData.append('user', 'NUMERO');

        console.log(event.target)
        console.log(event.target.files[0])
        console.log(bodyFormData)

        axios({
            method: 'post',
            url: URL_File,
            data: bodyFormData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (resp) {
            //handle success
            console.log(resp);
        })
        .catch(function (err) {
            //handle error
            console.log(err);
        });
}

export const DownloadDocumento = (doc) => {
    
}