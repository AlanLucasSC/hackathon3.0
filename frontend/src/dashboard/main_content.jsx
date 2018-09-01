import React from 'react'
import SideBar from './sidebar'
import BreadCrumbs from '../dashboard/sb_breadcrumbs'
import IconCards from './iconcards'
import DataTables from './datatables'


export default props => (
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper">
            <div className="container-fluid">
                <BreadCrumbs />
                <IconCards />
                <DataTables />
            </div>
            coloca sticky aqui
        </div>
    </div>
)