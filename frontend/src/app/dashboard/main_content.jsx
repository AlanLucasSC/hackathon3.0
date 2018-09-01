import React from 'react'
import SideBar from './sidebar'
import BreadCrumbs from './breadcrumbs'
import IconCards from './iconcards'
import DataTables from './datatables'
import Footer from './footer'


export default props => (
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper">
            <div className="container-fluid">
                <BreadCrumbs />
                <IconCards />
                <DataTables />
            </div>
            <Footer />
        </div>
    </div>
)