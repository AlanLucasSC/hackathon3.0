import React from 'react'

export default props => (
   
   <div className="container"> 
     <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card border" id="cadastroUsuario">
                <div className="card-body">
                    <h3 className="card-title">Cadastre-se</h3>
                      <h6 className="card-subtitle mb2 text-muted">(*) Campos Obrigatórios</h6>
                        <form encType="multipart/form-data">
                            <div className="form-group">
                                <strong><label htmlFor="nome">Nome Completo</label></strong>
                                <input className="form-control" id="nome" placeholder="Nome Completo" 
                                value={props.nome} onChange={props.handleChangeNome}/>
                            </div>

                            <div className="form-group">
                            <strong><label htmlFor="email">Email</label></strong>
                                <input className="form-control" id="email" placeholder="Email" 
                                value={props.email} onChange={props.handleChangeEmail}/>
                            </div>

                            <div className="form-group">
                            <strong><label htmlFor="cpf">CPF</label></strong>
                                <input className="form-control" id="cpf" placeholder="CPF" 
                                value={props.cpf} onChange={props.handleChangeCpf}/>
                            </div>

                            <div className="form-group">
                            <strong> <label htmlFor="rg">RG</label></strong>
                                <input className="form-control" id="rg" placeholder="RG" 
                                value={props.rg} onChange={props.handleChangeRg}/>
                            </div>

                            <div className="form-group">
                            <strong> <label htmlFor="cargo">Cargo</label></strong>
                                <input className="form-control" id="cargo" placeholder="Cargo" 
                                value={props.cargo} onChange={props.handleChangeCargo}/>
                            </div>

                            <div className="form-group">
                            <strong><label htmlFor="password">Senha</label></strong>
                                <input className="form-control" id="password" placeholder="Senha" 
                                value={props.password} onChange={props.handleChangePassword} type="password"/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-md" onClick={props.handleAdd} >Cadastrar</button>
                            <button type="cancel" className="btn btn-danger btn-md">Cancelar</button>
                        </form>
                </div>
            </div>
        </div>
     </div>  
   </div>
)