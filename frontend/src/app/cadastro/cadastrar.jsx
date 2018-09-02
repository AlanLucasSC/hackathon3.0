import React, { Component } from 'react'
import axios from 'axios'
import {  Link } from 'react-router'
import Form from './cadastrar_usuario'

const URL = 'http://localhost:4009/api/user'

//talvez trocar estagio por user



export default class Cadastrar extends Component {
    
    constructor(props){
        super(props)
        this.state = {email: '', password: '', nome: '', 
        cargo: '', rg: '', cpf: '', list: [] }
        

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeCargo = this.handleChangeCargo.bind(this)
        this.handleChangeRg = this.handleChangeRg.bind(this)
        this.handleChangeCpf = this.handleChangeCpf.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        

        this.refresh()
       
    }

  
    handleChangeEmail(e){
        this.setState({...this.state, email: e.target.value })
    }
    handleChangePassword(e){
        this.setState({...this.state, password: e.target.value })
    }
    handleChangeNome(e){
        this.setState({...this.state, nome: e.target.value })
    }
    handleChangeCargo(e){
        this.setState({...this.state, cargo: e.target.value })
    }
    handleChangeCpf(e){
        this.setState({...this.state, cpf: e.target.value })
    }
    handleChangeRg(e){
        this.setState({...this.state, rg: e.target.value })
    }
   
    handleAdd(){
        const email = this.state.email
        const password = this.state.password
        const nome = this.state.nome
        const cargo = this.state.cargo
        const rg = this.state.rg
        const cpf = this.state.cpf
        

        axios.post(URL, {email, password, nome, cargo, rg, cpf})
            .then(resp => this.refresh())
       
            
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, email: '', password: '', nome: '', 
            cargo: '', rg: '', cpf:'', list: resp.data})) 
       
    }
   
   

    render() {
        return (
            <div className='Cadastrar'> 
                <Form
                    email={this.state.email}
                    password={this.state.password}
                    nome={this.state.nome}
                    cargo={this.state.cargo}
                    rg={this.state.rg}
                    cpf={this.state.cpf}

                    handleAdd={this.handleAdd}

                    handleChangeEmail={this.handleChangeEmail}
                    handleChangePassword={this.handleChangePassword}
                    handleChangeNome={this.handleChangeNome}
                    handleChangeCargo={this.handleChangeCargo}
                    handleChangeRg={this.handleChangeRg}
                    handleChangeCpf={this.handleChangeCpf}
                   
                />
             
           
            </div>
        )
    }
}

