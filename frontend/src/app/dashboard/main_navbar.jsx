import React from 'react'
import NavBarSearch from '../dashboard/nb_search'
import NavBar from '../dashboard/navbar'


export default props => (
    <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

      <a className="navbar-brand mr-1" href="/dashboard">Du Fino</a>

      <NavBar />

    </nav>
)

/* sidebar tooggle n ta funcionado 
<button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <i className="fas fa-bars"></i>
      </button>
      */