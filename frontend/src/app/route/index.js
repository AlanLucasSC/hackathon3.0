import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from '../auth'

export default class Routes extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true} component={Login} />
                </Switch>
            </BrowserRouter>   
        )
    }
}