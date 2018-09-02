import React, { Component } from 'react'
import axios from 'axios'
import {  Link } from 'react-router-dom'
import Form from './form'
import Layout from '../layout/layout'
const URL = 'http://virtus.azi.com.br/virtus-rest/v1/categorias'





export default class ListarDocumentos extends Component {
    
    constructor(props){
        super(props)
        this.state = { teste:'', list: [] }
       

        this.refresh()
       
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, teste: '', list: resp.data})) 
       
    }
   
   

    render() {
      
        return (
            <div className='Documentos'> 
            
                <Layout>
                    <Form  />
                </Layout> 
             
           
            </div>
        )
    }
}

