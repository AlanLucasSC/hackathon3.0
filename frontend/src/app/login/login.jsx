import React, { Component } from 'react'


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {}

       
    }

  
   

    render() {
        return (
        <div className='login'>
            <form id="form_login">
                <p>
                    <input type="text" className="form-control" placeholder="username" />
                </p>
                <p>
                    <input type="password" className="form-control" placeholder="password" />
                </p>
                <p>
                    <input type="text" className="form-control justify-content-center" placeholder="server" />
                </p>
                <p>
                    <button className="form-control" type="button">Login</button>
                </p>
            </form>
               
              
               

              
            </div>
        )
    }
}