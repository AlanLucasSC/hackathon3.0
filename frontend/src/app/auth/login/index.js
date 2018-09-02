import React, {Component} from 'react'

import '../../App.css';
import { getCategoria, CriarDocumento, DownloadDocumento } from '../../action/effects'

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
                <button onClick={ () => DownloadDocumento('cb1f5a1d-87e0-4c44-88f9-dde868a9a912') }>Aperte Aqui</button>
            </div>
        )
    }
} 