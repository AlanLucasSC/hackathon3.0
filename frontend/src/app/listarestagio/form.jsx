import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'


export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => {
          if(post.validado == 'FALSE'){
            return (
              <tr key={post._id}>
                <th>{post.instituicao}</th>
                <th>{post.supervisor}</th>
                <th>
                <button className="sucess" onClick={() => props.aceitar( post._id )}> Aceitar </button>
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
