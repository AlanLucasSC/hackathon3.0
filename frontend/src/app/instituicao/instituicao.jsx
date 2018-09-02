import React, { Component } from 'react'
import axios from 'axios'
import Layout from '../layout/layout'
import {  Link } from 'react-router'
import Form from './instituicaotela'
const URL = 'http://localhost:4009/api/instituicao'
//talvez trocar estagio por user


export default class Instituicao extends Component {
    
    constructor(props){
        super(props)
        this.state = {nome: '', usuario: '', usuarioNome: '', list: [] }
        
        var a = localStorage.getItem("email")
        console.log(a)
        console.log( localStorage.getItem("email") )
        

        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeUsuario = this.handleChangeUsuario.bind(this)
        this.handleChangeUsuarioNome = this.handleChangeUsuarioNome.bind(this)
        this.handleChangeSupervisor = this.handleChangeSupervisor.bind(this)
       
        this.handleAdd = this.handleAdd.bind(this)
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
    handleChangeUsuarioNome(value){
        this.setState({...this.state, usuarioNome: value })
    }
   
    handleAdd(){
        var nome = this.state.nome
        axios.get(`http://localhost:4009/api/user?email=${localStorage.getItem("email")}`)
        .then(function (response) {
            //handle success
            nome = response.data[0].nome
            this.setState({...this.state, usuarioNome: nome})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        /*axios.post(URL, {
            nome, 
            usuario, 
            supervisor
        })
        .then(resp => this.refresh())*/
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, nome: '', usuario: '', supervisor: '', list: resp.data})) 

    }
   
   

    render() {
        return (
            <Layout>
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
            </Layout>
        )
    }
}

