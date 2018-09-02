import axios from 'axios'

const URL = "http://virtus.azi.com.br/virtus-rest/v1/arquivos"
const URL_File = 'http://localhost:4009/file'

export const CriarDocumento = (event, processo, protocolo, categoria, 
    estagiario, instituicao, _id) => {
    var bodyFormData = new FormData();
        bodyFormData.set('image', event.target.files[0]);
        bodyFormData.append('protocolodoc', protocolo);
        bodyFormData.append('chavecategoria', categoria);
        bodyFormData.append('numeroprocesso', processo);
        bodyFormData.append('mimetype', 'application/pdf');
        bodyFormData.append('nome', 'Termo de Compromisso');
        bodyFormData.append('estagio', _id);
        bodyFormData.append('user', estagiario);

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
    console.log(doc)
    axios.get(`http://localhost:4009/download/${doc}`).then(
        value => {
            console.log(value)
            setTimeout(function(){ window.location = `http://localhost:4009/public/${value.data.path}` }, 2000);
            
        }
    )
}