import React from 'react'
import PageTitle from './page-title'
import ClearFix from './clearfix_abaixo'

export default props => (
    <div className="right_col" role="main">
        <div className="">
            <PageTitle />
            <div className="clearfix"></div>
            <ClearFix />
        </div>
    </div>
)