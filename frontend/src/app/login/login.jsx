import React, { Component } from 'react'
import Ibagem from '../../../src/img/logo.jpg'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {}

       
    }

    render() {
        return (
        <div className='login'>
            <div className="container"> 
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border cardlog" id="cadastroUsuario">
                     <img class="card-img-top" src={Ibagem} />  
                        <div className="card-body ">
                        <h3 class="lock">
                            <i class="fas fa-lock">
                            </i>
                        </h3>    
                        <strong><h3 class="card-title">Login</h3></strong>
                        
                                <form id="form_login" encType="multipart/form-data">
                                    
                                    <div className="form-group">
                                        <strong><label For="email">Email</label></strong>
                                            <input className="form-control" id="email" placeholder="Digite seu email" />
                                    </div>

                                    <div className="form-group">
                                    <strong><label For="password">Senha</label></strong>
                                        <input className="form-control" id="password" placeholder="Digite sua senha" />
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-md">Cadastrar</button>
                                </form>
                        </div>
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