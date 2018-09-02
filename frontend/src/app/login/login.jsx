import React, { Component } from 'react'
import axios from 'axios'
import Ibagem from '../../../src/img/logo.png'
import { Link } from 'react-router-dom'

const URL = 'http://localhost:4009/api/user'
const URLCompare = 'http://localhost:4009/api/compare'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '', 
            password: '',
            error: ''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.login = this.login.bind(this)
    }

    handleChangeEmail(e){
        this.setState({...this.state, email: e.target.value })
    }
    handleChangePassword(e){
        this.setState({...this.state, password: e.target.value })
    }
    login(){
        axios.get(`${URL}?email=${this.state.email}`)
            .then(resp => {
                axios.get(`${URLCompare}/${resp.data[0].password}/${this.state.password}`)
                .then(
                    resp => {
                        switch(resp.data.resp){
                            case true:
                                localStorage.setItem("email", this.state.email);
                                window.location = "/dashboard"
                                break
                            case false:
                                this.setState({...this.state, error: 'Senha invalida' })
                                console.log(this.state.error)
                                break
                        }
                    }
                )
                console.log(resp.data)
            }) 
        console.log(this.state.email)
        console.log(this.state.password)
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-cadastro">
                    <div className="wrap-cadastro">
                        <div className="login100-pic ">
                             <img src={Ibagem} class="fix5"/>
                        </div>
        
                        <div className="login100-form validate-form">
                            <span className="login100-form-title">
                                Login
                            </span>
        
                            <div className="wrap-input100 validate-input" data-validate = "Digite um email válido: ex@abc.xyz">
                                <input className="input101" id="email" placeholder="Email" 
                                value={this.email} onChange={this.handleChangeEmail}/>
                            </div>
        
                            <div className="wrap-input100 validate-input" data-validate = "Digite uma senha">
                                <input className="input101" id="password" placeholder="Senha" 
                                value={this.password} onChange={this.handleChangePassword} type="password"/>
                            </div>
                            
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={this.login} className="btn btn-primary btn-md" >
                                    Login
                                </button>
                            </div>
        
                            <div className="text-center p-t-136">
                            <Link to="/cadastrarusuario">
                                <a className="txt2" >
                                    Cadastre-se
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a></Link>
                            </div>
                           
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
/*<input className="form-control" id="email" placeholder="Email" 
value={props.email} onChange={props.handleChangeEmail}/> */

/*<input className="form-control" id="password" placeholder="Senha" 
value={props.password} onChange={props.handleChangePassword}*/
//button: onClick={props.handleAdd}
//embaxo do input  <span className="focus-input100"></span>