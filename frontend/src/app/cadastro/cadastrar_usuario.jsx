import React from 'react'

export default props => (
    
    <div className="card border">
        <div className="card-body">
            <form action="/cadastrarusuario" method="POST">
              @csrf
               <div className="form-group">
                  <label For="">Nome Completo</label>

               </div>
            </form>
        </div>
    </div>

)