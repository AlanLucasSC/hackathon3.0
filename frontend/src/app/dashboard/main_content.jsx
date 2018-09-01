import React from 'react'
import PageTitle from './page-title'
import ClearFix from './clearfix_abaixo'

export default props => (
    <div class="right_col" role="main">
        <div class="">
            <PageTitle />
            <div class="clearfix"></div>
            <ClearFix />
        </div>
    </div>
)