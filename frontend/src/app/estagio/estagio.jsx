import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import Form from './estagiotela'
const URL = 'http://localhost:4009/api/estagio'
//talvez trocar estagio por user


export default class Estagio extends Component {
    
    constructor(props){
        super(props)
        this.state = {processo: '', protocolo: '', categoria: '[DU_BOM]TERMO_COMPROMISSO', estagiario: '', instituicao: '', 
        supervisor: '', list: [] }

        

        this.handleChangeProcesso = this.handleChangeProcesso.bind(this)
        this.handleChangeProtocolo = this.handleChangeProtocolo.bind(this)
        this.handleChangeCategoria = this.handleChangeCategoria.bind(this)
        this.handleChangeEstagiario = this.handleChangeEstagiario.bind(this)
        this.handleChangeInstituicao = this.handleChangeInstituicao.bind(this)
        this.handleChangeSupervisor = this.handleChangeSupervisor.bind(this)
       
        this.handleAdd = this.handleAdd.bind(this)

        this.refresh()
       
    }

  
    handleChangeProcesso(e){
        this.setState({...this.state, processo: '[DU_BOM]TERMO_COMPROMISSO' })
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
   
    handleAdd(instituicao, supervisor){
        const processo = this.state.processo//arrumar forma de passar mais parametros, no caso nome e tipo. Tipo é fixo entao é mais de boa. Quando deixei default na collection deu
        const protocolo = this.state.protocolo
        const categoria = this.state.categoria
        const estagiario = localStorage.getItem("email")

        axios.get('http://virtus.azi.com.br/virtus-rest/v1/protocolos')
        .then(
            value => {
                localStorage.setItem("protocolo", value.data.dados);
                this.setState({...this.state, protocolo: value.data.dados })
            }
        )

        axios.get('http://virtus.azi.com.br/virtus-rest/v1/protocolos/processo')
        .then(
            value => {
                localStorage.setItem("processo", value.data.dados);
                this.setState({...this.state, processo: value.data.dados })
            }
        )

        setTimeout(function(){ 
            console.log(instituicao)
            console.log(supervisor)
            console.log(localStorage.getItem("processo"))
            console.log(localStorage.getItem("protocolo"))
            console.log(estagiario)
            console.log('[DU_BOM]TERMO_COMPROMISSO')
            axios.post('http://localhost:4009/api/estagio', {
                processo: localStorage.getItem("processo"),
                protocolo: localStorage.getItem("protocolo"),
                categoria: '[DU_BOM]TERMO_COMPROMISSO',
                estagiario: estagiario,
                instituicao: instituicao,
                supervisor: supervisor
            })
            .then(resp => console.log(resp))
        }, 200)


       
        
        /*
        axios.post(URL, {processo, protocolo, categoria, estagiario, instituicao, 
        supervisor})
            .then(resp => this.refresh())
        */
       
            
    }
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, processo: '', protocolo: '', categoria: '', estagiario: '', instituicao: '', 
            supervisor: '', email: '', password: '', nome: '', 
            cargo: '', rg: '', cpf:'', list: resp.data})) 

    }
   
   

    render() {
        return (
            <div className='Estagio'> 
                <Form 
                    processo={this.state.processo} 
                    protocolo={this.state.protocolo}
                    categoria={this.state.categoria}
                    estagiario={this.state.estagiario}
                    instituicao={this.state.instituicao}
                    supervisor={this.state.supervisor}

                    handleAdd={this.handleAdd}

                    handleChangeProcesso={this.handleChangeProcesso}
                    handleChangeProtocolo={this.handleChangeProtocolo}
                    handleChangeCategoria={this.handleChangeCategoria}
                    handleChangeEstagiario={this.handleChangeEstagiario}
                    handleChangeInstituicao={this.handleChangeInstituicao}
                    handleChangeSupervisor={this.handleChangeSupervisor}
                    />
             
           
            </div>
        )
    }
}

