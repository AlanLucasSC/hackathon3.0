import React, { Component } from 'react'
import axios from 'axios'
import {  Link } from 'react-router-dom'
import Form from './form'

const URL = 'http://virtus.azi.com.br/virtus-rest/v1/categorias'





export default class ListarDocumentos extends Component {
    
    constructor(props){
        super(props)
        this.state = { list: [] }
       

        this.refresh()
       
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, list: resp.data})) 
       
    }
   
   

    render() {
        return (
            <div className='Documentos'> 
                <Form
                    list = {this.state.list}
                   
                />
             
           
            </div>
        )
    }
}

