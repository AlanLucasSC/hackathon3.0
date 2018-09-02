import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'


export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (   
            <tr key={post._id}>
            <th>{post.nome}</th>
            <th>{post.usuarioNome}</th>
            
             </tr>
        ))
    }
   

    return (
       
        <div className="container row">
        <div id="fix4" className="card mb-3">
     <div className="card-header">
              <i className="fas fa-table"> </i>
               Adicionar Estágios</div>
      <div className="card-body-table" >
        <div className="inferno">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Instituição</th>
                <th>Supervisor</th>
               
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>Instituição</th>
                <th>Supervisor</th>
               
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
