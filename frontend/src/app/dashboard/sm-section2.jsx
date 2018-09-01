import React from 'react'

export default props => (

   <div className="menu_section">
                <h3>Live On</h3>
                <ul className="nav side-menu">
                    <li><a><i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                            <li><a href="e_commerce.html">E-commerce</a></li>
                            <li><a href="e_commerce_backend.html">E-commerce Backend</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="project_detail.html">Project Detail</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="real_estate.html">Real Estate</a></li>
 
                        </ul>
                    </li>
                    <li><a><i className="fa fa-windows"></i> Extras <span className="fa fa-chevron-down"></span></a>
                        <ul className="nav child_menu">
                            <li><a href="page_404.html">404 Error</a></li>
                            <li><a href="page_500.html">500 Error</a></li>
                            <li><a href="coming_soon.html">Coming Soon</a></li>
                            <li><a href="plain_page.html">Plain Page</a></li>
                            <li><a href="login.html">Login Page</a></li>
                            <li><a href="sign_up.html">SignUp Page</a></li>
                            <li><a href="pricing_tables.html">Pricing Tables</a></li>
 
                        </ul>
                    </li>
                    <li><a><i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span></a></li>
                </ul>
            </div>
)