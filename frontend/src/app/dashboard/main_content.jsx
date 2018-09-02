import React from 'react'
import SideBar from './sidebar'

import DataTables from './datatables'
import Footer from './footer'


export default props => (
    <div id="wrapper">
        <SideBar />
        <div id="content-wrapper">
            <div className="container-fluid">
                { props.children }
            </div>
        </div>
    </div>
)