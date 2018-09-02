import React from 'react'
import DataTables from '../dashboard/datatables';

const Card = {
    height: 'auto'
}

export default props => (
   
   <div>
        <div className="container"> 
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card border" id="cadastroInstituicao">
                        <div className="card-body" style={ Card }>
                            <h3 className="card-title">Cadastrar Instituição</h3>
                            
                                <div encType="multipart/form-data">
                                    <div className="form-group">
                                        <strong><label htmlFor="nome">Nome</label></strong>
                                        <input className="form-control" id="nome" placeholder="Nome" 
                                        value={props.nome} onChange={props.handleChangeNome}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-md" onClick={props.handleAdd}>Cadastrar</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>     
   </div>
)