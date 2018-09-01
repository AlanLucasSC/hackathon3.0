import React from 'react'
import SmTitle from './sm-title'
import SmSection from './sm-section'
import SmSection2 from './sm-section2'
import SmFooter from './sm-footer'

export default props => (
    <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
       
            <div class="navbar nav_title" style="border: 0;">
                 <a href="index.html" class="site_title">Gentelella Alela!</a>
            </div>
           
            <SmTitle />
            
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                <SmSection />
                <SmSection2 />
            </div>

            <SmFooter />

        </div>
    </div>
)