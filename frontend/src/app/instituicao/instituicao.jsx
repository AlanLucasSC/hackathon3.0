import React, { Component } from 'react'
import axios from 'axios'
import {  Link } from 'react-router'
import Form from './instituicaotela'
const URL = 'http://localhost:4009/api/instituicao'
//talvez trocar estagio por user


export default class Instituicao extends Component {
    
    constructor(props){
        super(props)
        this.state = {nome: '', usuario: '', supervisor: '', list: [] }
        

        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeUsuario = this.handleChangeUsuario.bind(this)
        this.handleChangeSupervisor = this.handleChangeSupervisor.bind(this)
       
        this.handleAdd = this.handleAdd.bind(this)

        this.refresh()
       
    }

  
    handleChangeNome(e){
        this.setState({...this.state, nome: e.target.value })
    }
    handleChangeUsuario(e){
        this.setState({...this.state, usuario: e.target.value })
    }
    handleChangeSupervisor(e){
        this.setState({...this.state, supervisor: e.target.value })
    }
   
    handleAdd(){
        const nome = this.state.nome//arrumar forma de passar mais parametros, no caso nome e tipo. Tipo é fixo entao é mais de boa. Quando deixei default na collection deu
        const usuario = this.state.usuario
        const supervisor = this.state.supervisor
       
       
        

        axios.post(URL, {nome, usuario,  
        supervisor})
            .then(resp => this.refresh())
       
            
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, nome: '', usuario: '', supervisor: '', list: resp.data})) 

    }
   
   

    render() {
        return (
            <div className='Instituicao'> 
                <Form nome={this.state.nome} 
                    usuario={this.state.usuario}
                    supervisor={this.state.supervisor}
                    handleAdd={this.handleAdd}
                    handleChangeNome={this.handleChangeNome}
                    handleChangeUsuario={this.handleChangeUsuario}
                    handleChangeSupervisor={this.handleChangeSupervisor}
                    />
             
           
            </div>
        )
    }
}

