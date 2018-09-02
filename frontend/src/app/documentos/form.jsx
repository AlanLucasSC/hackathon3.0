import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'


export default props => {
    const renderRows = () =>{
        const list = props.list || []
        return list.map(post => (   
            <div className="col-md-4" key={post._id}>
                {post.nome}
           
            </div>
        ))
    }
   

    return (
       
        <div className="container row">
            
                
           {renderRows()}
          
        </div>
    )
}

