import React from 'react'

export default props => (
   
   <div className="container"> 
     <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card border" id="cadastroUsuario">
                <div className="card-body">
                    <h3 class="card-title">Cadastre-se</h3>
                      <h6 className="card-subtitle mb2 text-muted">(*) Campos Obrigatórios</h6>
                        <form encType="multipart/form-data">
                            <div className="form-group">
                                <strong><label For="nome">Nome Completo</label></strong>
                                <input className="form-control" id="nome" placeholder="Nome Completo" 
                                value={props.nome} onChange={props.handleChangeNome}/>
                            </div>

                            <div className="form-group">
                            <strong><label For="email">Email</label></strong>
                                <input className="form-control" id="email" placeholder="Email" 
                                value={props.email} onChange={props.handleChangeEmail}/>
                            </div>

                            <div className="form-group">
                            <strong><label For="cpf">CPF</label></strong>
                                <input className="form-control" id="cpf" placeholder="CPF" 
                                value={props.cpf} onChange={props.handleChangeCpf}/>
                            </div>

                            <div className="form-group">
                            <strong> <label For="rg">RG</label></strong>
                                <input className="form-control" id="rg" placeholder="RG" 
                                value={props.rg} onChange={props.handleChangeRg}/>
                            </div>

                            <div className="form-group">
                            <strong> <label For="cargo">Cargo</label></strong>
                                <input className="form-control" id="cargo" placeholder="Cargo" 
                                value={props.cargo} onChange={props.handleChangeCargo}/>
                            </div>

                            <div className="form-group">
                            <strong><label For="password">Senha</label></strong>
                                <input className="form-control" id="password" placeholder="Senha" 
                                value={props.password} onChange={props.handleChangePassword}/>
                            </div>

                            <button type="submit" class="btn btn-primary btn-md">Cadastrar</button>
                            <button type="cancel" class="btn btn-danger btn-md">Cancelar</button>
                        </form>
                </div>
            </div>
        </div>
     </div>  
   </div>
)