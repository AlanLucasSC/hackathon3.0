import axios from 'axios'

const URL_Categoria = 'http://virtus.azi.com.br/virtus-rest/v1/categorias'

export const getCategoria = () => {
    return axios.get(URL_Categoria)
}