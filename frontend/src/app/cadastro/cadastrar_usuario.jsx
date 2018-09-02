import React from 'react'
import Ibagem from '../../../src/img/logo.jpg'
import { Link } from 'react-router-dom'

export default props => (
   
    <div className="limiter">
    <div className="container-cadastro">
        <div className="wrap-cadastro">
            <div className="login100-pic">
                 <img className="fix1" src={Ibagem} />
            </div>

            <div className=" login100-form validate-form">
                <span className="login100-form-title">
                    Cadastro<hr/>
                    <p className="text-muted">Todos os campos são obrigatórios!</p>
                </span>

                <div className="wrap-input100" >
                     <input className="input101" id="nome" placeholder="Nome Completo" 
                                value={props.nome} onChange={props.handleChangeNome}/>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Digite um email válido: ex@abc.xyz">
                     <input className="input101" id="email" placeholder="Email" 
                                value={props.email} onChange={props.handleChangeEmail}/>
                    
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Digite uma senha">
                      <input className="input101" id="password" placeholder="Senha" 
                                value={props.password} onChange={props.handleChangePassword} type="password"/>
                </div>

                <div className="wrap-input100" >
                <input className="input101" id="cpf" placeholder="CPF" 
                                value={props.cpf} onChange={props.handleChangeCpf}/>
                </div>

                <div className="wrap-input100" >
                <input className="input101" id="rg" placeholder="RG" 
                                value={props.rg} onChange={props.handleChangeRg}/>
                </div>

                <div className="wrap-input100" >
                <input className="input101" id="cargo" placeholder="Cargo" 
                                value={props.cargo} onChange={props.handleChangeCargo}/>
                </div>
                
                <div className="container-login100-form-btn">
                <button type="submit" className="btn btn-primary btn-md" onClick={props.handleAdd}>
                        Cadastrar
                    </button>
       
                <Link to="/">
                <button type="cancel" className="btn btn-dark btn-md fix2" >
                        Cancelar
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>
)