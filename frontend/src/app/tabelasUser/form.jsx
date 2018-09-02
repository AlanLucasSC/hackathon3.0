import React from 'react'
import {CriarDocumento} from '../action/effects'
import { Router, Route, Link, hashHistory } from 'react-router'


export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => {
          if(post.validado == 'TRUE'){
            return (
              <tr key={post._id}>
                <th>{post.instituicao}</th>
                <th>{post.supervisor}</th>
                <th>
                  <input
                      className="form-control" 
                      id="image" 
                      type="file" 
                      name="Foto"
                      onChange={ 
                        (e) => CriarDocumento(
                          e, post.processo, post.protocolo, post.categoria, 
                          post.estagiario, post.instituicao, post._id
                        ) 
                      }
                  />
                </th>
              </tr>
            )
          }
        })
    }
   

    return (
       
        <div className="container row">
        <div id="fix4" className="card mb-3">
     <div className="card-header">
              <i className="fas fa-table"> </i>
               Lista de Estágios</div>
      <div className="card-body-table" >
        <div className="inferno">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Instituição</th>
                <th>Supervisor</th>
                <th>Ações</th>
               
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>Instituição</th>
                <th>Supervisor</th>
                <th>Ações</th>
               
              </tr>
            </tfoot>
            <tbody>
              
            {renderRows()}
            </tbody>
          </table>
        </div>
    </div>
</div>

            
                
        
          
        </div>
    )
}
