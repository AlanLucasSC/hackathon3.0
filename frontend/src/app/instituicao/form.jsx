import React from 'react'

export default props => (
   
   <div className="container"> 
     <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card border" id="cadastroInstituicao">
                <div className="card-body">
                    <h3 className="card-title">Cadastre Instituiçao</h3>
                      <h6 className="card-subtitle mb2 text-muted">(*) Campos Obrigatórios</h6>
                        <form encType="multipart/form-data">
                            <div className="form-group">
                                <strong><label htmlFor="nome">Nome</label></strong>
                                <input className="form-control" id="nome" placeholder="Nome" 
                                value={props.nome} onChange={props.handleChangeNome}/>
                            </div>

                            <div className="form-group">
                            <strong><label htmlFor="usuario">Usuario</label></strong>
                                <input className="form-control" id="usuario" placeholder="Usuário" 
                                value={props.usuario} onChange={props.handleChangeUsuario}/>
                            </div>

                            <div className="form-group">
                            <strong><label htmlFor="supervisor">Supervisor</label></strong>
                                <input className="form-control" id="supervisor" placeholder="supervisor" 
                                value={props.supervisor} onChange={props.handleChangeSupervisor}/>
                            </div>


                            <button type="submit" className="btn btn-primary btn-md" onClick={props.handleAdd}>Cadastrar</button>
                        </form>
                </div>
            </div>
        </div>
     </div>  
   </div>
)