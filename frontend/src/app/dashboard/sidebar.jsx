import React from 'react'

export default props => (

    <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span> Painel</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cadastrarestagio">
            <i className="fas fa-plus"></i>
            <span> Adicionar Novo Estágio</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/listarestagio">
            <i className="fas fa-list-ul"></i>
            <span> Estágios</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cadastrarinstituicao">
            <i className="fas fa-list-ul"></i>
            <span> Instituição </span></a>
        </li>
      </ul>

)

/* pages <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="pagesDropdown">
            <h6 className="dropdown-header">Login Screens:</h6>
            <a className="dropdown-item" href="login.html">Login</a>
            <a className="dropdown-item" href="register.html">Register</a>
            <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">Other Pages:</h6>
            <a className="dropdown-item" href="404.html">404 Page</a>
            <a className="dropdown-item" href="blank.html">Blank Page</a>
          </div>
        </li> */