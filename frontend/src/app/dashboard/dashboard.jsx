import React, { Component } from 'react'
import Footer from './footer'
import MainNavbar from './main_navbar'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
       

       
    }

  
   
    

    render() {
        return (
            <div className='dashboard'>
                <MainNavbar />
                <Footer />

               

              
            </div>
        )
    }
}