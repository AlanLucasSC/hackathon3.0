import React from 'react'

export default props => (
   
   <div className="container"> 
     <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card border" id="cadastroEstagio">
                <div className="card-body">
                    <h3 class="card-title">Cadastre Estagio</h3>
                      <h6 className="card-subtitle mb2 text-muted">(*) Campos Obrigatórios</h6>
                        <form encType="multipart/form-data">
                            <div className="form-group">
                                <strong><label For="processo">Processo</label></strong>
                                <input className="form-control" id="processo" placeholder="Processo" 
                                value={props.processo} onChange={props.handleChangeProcesso}/>
                            </div>

                            <div className="form-group">
                            <strong><label For="protocolo">Protocolo</label></strong>
                                <input className="form-control" id="protocolo" placeholder="Protocolo" 
                                value={props.protocolo} onChange={props.handleChangeProtocolo}/>
                            </div>

                            <div className="form-group">
                            <strong><label For="categoria">Categoria</label></strong>
                                <input className="form-control" id="categoria" placeholder="Categoria" 
                                value={props.categoria} onChange={props.handleChangeCategoria}/>
                            </div>

                            <div className="form-group">
                            <strong> <label For="estagiario">Estagiario</label></strong>
                                <input className="form-control" id="estagiario" placeholder="Estagiario" 
                                value={props.estagiario} onChange={props.handleChangeEstagiario}/>
                            </div>

                            <div className="form-group">
                            <strong> <label For="instituicao">Instituição</label></strong>
                                <input className="form-control" id="instituicao" placeholder="Instituição" 
                                value={props.instituicao} onChange={props.handleChangeInstituicao}/>
                            </div>

                            <div className="form-group">
                            <strong><label For="supervisor">Supervisor</label></strong>
                                <input className="form-control" id="supervisor" placeholder="Supervisor" 
                                value={props.supervisor} onChange={props.handleChangeSupervisor}/>
                            </div>

                            <button type="submit" class="btn btn-primary btn-md">Cadastrar</button>
                        </form>
                </div>
            </div>
        </div>
     </div>  
   </div>
)