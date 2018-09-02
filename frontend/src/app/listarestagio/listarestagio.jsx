import React, { Component } from 'react'
import axios from 'axios'
import {  Link } from 'react-router'
import Form from './form'
import Layout from '../layout/layout'
import BreadCrumbs from '../dashboard/breadcrumbs';

const URL = 'http://localhost:4009/api/estagio'
//talvez trocar estagio por user


export default class ListaEstagio extends Component {
    
    constructor(props){
        super(props)
        this.state = {processo: '', protocolo: '', categoria: '', estagiario: '', instituicao: '', 
        supervisor: '', list: [] }
        


        this.refresh()
       
    }

  
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, processo: '', protocolo: '', categoria: '', estagiario: '', instituicao: '', 
            supervisor: '', email: '', password: '', nome: '', 
            cargo: '', rg: '', cpf:'', list: resp.data})) 

    }
   
   

    render() {
        return (
            <div className='ListaEstagios'> 
            <Layout>
        <BreadCrumbs/>
        <Form list={this.state.list} />
     </Layout> 
               
             
           
            </div>
        )
    }
}

