import React, { Component } from 'react'
import axios from 'axios'
import Form from './tabela_form'

const URL = 'http://localhost:4009/api/instituicao'



export default class Tabela extends Component {
    
    constructor(props){
        super(props)
        this.state = {processo: '', protocolo: '', categoria: '', estagiario: '', instituicao: '', 
        supervisor: '', list: []}
        

      

        this.refresh()
       
    }

   
    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, processo: '', 
            protocolo: '', categoria: '', estagiario: '', instituicao: '', 
            supervisor: '', list: resp.data})) 
    }
   
   

    render() {
        return (
            <div className='tabela'> 
                <Form list={this.state.list} 
                 
                    
                    />
             
           
            </div>
        )
    }
}

