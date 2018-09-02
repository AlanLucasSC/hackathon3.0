import React from 'react'
import {CriarDocumento} from '../action/effects'
import { Router, Route, Link, hashHistory } from 'react-router'
import { DownloadDocumento } from '../action/effects'


export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => {
          return (
            <tr key={post._id}>
              <th>{post._id}</th>
              <th>
                <button onClick={ () => DownloadDocumento(post.value) }>Dowload</button>
              </th>
            </tr>
          )
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
                <th>Documento</th>
                <th>Ação</th>
               
              </tr>
            </thead>
            <tfoot>
              <tr>
              <th>Documento</th>
                <th>Ação</th>
               
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
