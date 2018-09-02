import React, { Component } from 'react'
import Ibagem from '../../../src/img/logo.jpg'
import { Link } from 'react-router-dom'


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {}

       
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic ">
                             <img src={Ibagem} />
                        </div>
        
                        <form id="form_login" encType="multipart/form-data" className="login100-form validate-form">
                            <span className="login100-form-title">
                                Login
                            </span>
        
                            <div className="wrap-input100 validate-input" data-validate = "Digite um email válido: ex@abc.xyz">
                                <input className="input100" type="text" name="email" id="email" placeholder="Email" />
                               
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
        
                            <div className="wrap-input100 validate-input" data-validate = "Digite uma senha">
                                <input className="input100" type="password" name="password" id="password" placeholder="Senha" />
                               
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            
                            <div className="container-login100-form-btn">
                                <Link to={'/dashboard'}>
                                <button className="login100-form-btn"type="submit" className="btn btn-primary btn-md" >
                                    Login
                                </button>
                                </Link>
                            </div>
        
                            <div className="text-center p-t-136">
                                <a className="txt2" href="/cadastrarusuario">
                                    Cadastre-se
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                           
                        </form>
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