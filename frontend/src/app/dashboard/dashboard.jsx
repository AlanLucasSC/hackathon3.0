import React, { Component } from 'react'
import Footer from './footer'
import MainNavbar from './main_navbar'
import MainContent from './main_content'
import BreadCrumbs from './breadcrumbs'
import IconCards from './iconcards'
import Layout from '../layout/layout'
import DataTables from '../dashboard/datatables'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <Layout>
                <BreadCrumbs />
                <IconCards />
                <DataTables/>
            </Layout>

        )
    }
}