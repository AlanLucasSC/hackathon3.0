import React, {Component} from 'react'

import '../../App.css';
import { getCategoria, CriarDocumento } from '../../action/effects'

export class Login extends Component{
    constructor(props){
        super(props)

        getCategoria().then(
            value => console.log(value.data)
        )
    }
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Login</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <input 
                    className="form-control" 
                    id="image" 
                    type="file" 
                    name="Foto"
                    onChange={ CriarDocumento }
                />
            </div>
        )
    }
} 