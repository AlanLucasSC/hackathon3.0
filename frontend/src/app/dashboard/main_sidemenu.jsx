import React from 'react'
import SmTitle from './sm-title'
import SmSection from './sm-section'
import SmSection2 from './sm-section2'
import SmFooter from './sm-footer'

export default props => (
    <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
       
            <div className="navbar nav_title" style="border: 0;">
                 <a href="index.html" className="site_title">Gentelella Alela!</a>
            </div>
           
            <SmTitle />
            
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <SmSection />
                <SmSection2 />
            </div>

            <SmFooter />

        </div>
    </div>
)