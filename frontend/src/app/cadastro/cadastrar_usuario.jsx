import React from 'react'

export default props => (
   <div className="container"> 
     <div className="row">
        <div className="col-xs-offset-6">
            <div className="card border">
                <div className="card-body">
                    <h5 class="card-title">Cadastre-se</h5>
                        <form encType="multipart/form-data">
                            <div className="form-group">
                                <label For="name">Nome Completo</label>
                                <input className="form-control" id="name" placeholder="Nome Completo" 
                                value={props.name} onChange={props.handleChangeName}/>
                            </div>

                            <div className="form-group">
                                <label For="email">Email</label>
                                <input className="form-control" id="email" placeholder="Email" 
                                value={props.email} onChange={props.handleChangeEmail}/>
                            </div>

                            <div className="form-group">
                                <label For="cpf">CPF</label>
                                <input className="form-control" id="cpf" placeholder="CPF" 
                                value={props.cpf} onChange={props.handleChangeCpf}/>
                            </div>

                            <div className="form-group">
                                <label For="rg">RG</label>
                                <input className="form-control" id="rg" placeholder="RG" 
                                value={props.rg} onChange={props.handleChangeRg}/>
                            </div>

                            <div className="form-group">
                                <label For="password">Senha</label>
                                <input className="form-control" id="password" placeholder="Senha" 
                                value={props.password} onChange={props.handleChangePassword}/>
                            </div>

                            <button type="submit" class="btn btn-primary btn-sm">Cadastrar</button>
                        </form>
                </div>
            </div>
        </div>
     </div>  
   </div>
)