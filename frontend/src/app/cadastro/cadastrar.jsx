import React, { Component } from 'react'
import axios from 'axios'
import {  Link } from 'react-router'

const URL = 'http://localhost:4009/api/estagio/estagio'
//talvez trocar estagio por user

import Form from './cadastrar_usuario'

export default class Cadastrar extends Component {
    
    constructor(props){
        super(props)
        this.state = {processo: '', protocolo: '', categoria: '', estagiario: '', instituicao: '', 
        supervisor: '', email: '', password: '', nome: '', 
        cargo: '', rg: '', cpf: '', list: [] }
        

        this.handleChangeProcesso = this.handleChangeProcesso.bind(this)
        this.handleChangeProtocolo = this.handleChangeProtocolo.bind(this)
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this)
        this.handleChangeEstagiario = this.handleChangeEstagiario.bind(this)
        this.handleChangeInstituicao = this.handleChangeInstituicao.bind(this)
        this.handleChangeSupervisor = this.handleChangeSupervisor.bind(this)
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangeCargo = this.handleChangeCargo.bind(this)
        this.handleChangeRg = this.handleChangeRg.bind(this)
        this.handleChangeCpf = this.handleChangeCpf.bind(this)
        

        this.refresh()
       
    }

  
    handleChangeProcesso(e){
        this.setState({...this.state, processo: e.target.value })
    }
    handleChangeProtocolo(e){
        this.setState({...this.state, protocolo: e.target.value })
    }
    handleChangeCategoria(e){
        this.setState({...this.state, categoria: e.target.value })
    }
    handleChangeEstagiario(e){
        this.setState({...this.state, estagiario: e.target.value })
    }
    handleChangeInstituicao(e){
        this.setState({...this.state, instituicao: e.target.value })
    }
    handleChangeSupervisor(e){
        this.setState({...this.state, supervisor: e.target.value })
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
   
    handleAdd(){
        const processo = this.state.processo//arrumar forma de passar mais parametros, no caso nome e tipo. Tipo é fixo entao é mais de boa. Quando deixei default na collection deu
        const protocolo = this.state.protocolo
        const categoria = this.state.categoria
        const estagiario = this.state.estagiario
        const instituicao = this.state.instituicao
        const supervisor = this.state.supervisor
        const email = this.state.email
        const password = this.state.password
        const nome = this.state.nome
        const cargo = this.state.cargo
        const rg = this.state.rg
        const cpf = this.state.cpf
        

        axios.post(URL, {processo, protocolo, categoria, estagiario, instituicao, 
        supervisor, email, password, nome, cargo, rg, cpf})
            .then(resp => this.refresh(resp.data))
       
            
    }
    refresh(help){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, processo: '', protocolo: '', categoria: '', estagiario: '', instituicao: '', 
            supervisor: '', email: '', password: '', nome: '', 
            cargo: '', rg: '', cpf:'', list: resp.data})) 
        this.state.id = help

    }
   
   

    render() {
        return (
            <div className='Cadastrar'> 
                <Form processo={this.state.processo} 
                    protocolo={this.state.protocolo}
                    categoria={this.state.categoria}
                    estagiario={this.state.estagiario}
                    instituicao={this.state.instituicao}
                    supervisor={this.state.supervisor}

                    email={this.state.email}
                    password={this.state.password}
                    nome={this.state.nome}
                    cargo={this.state.cargo}
                    rg={this.state.rg}
                    cpf={this.state.cpf}


                    

                   
                    handleChangeProcesso={this.handleChangeProcesso}
                    handleChangeProtocolo={this.handleChangeProtocolo}
                    handleChangeCategoria={this.handleChangeCategoria}
                    handleChangeEstagiario={this.handleChangeEstagiario}
                    handleChangeInstituicao={this.handleChangeInstituicao}
                    handleChangeSupervisor={this.handleChangeSupervisor}

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

