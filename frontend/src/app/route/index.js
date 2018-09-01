import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '../auth'
import Processo from '../processo/processo'
import Protocolo from '../protocolo/protocolo'
import Dashboard from '../dashboard/dashboard'
import LoginView from '../login/login'

export default class Routes extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                    <Route path="/processo" component={Processo} />
                    <Route path="/protocolo" component={Protocolo} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/login" component={LoginView} />

                </Switch>
            </BrowserRouter>   
        )
    }
}