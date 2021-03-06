import React from 'react'

export default props => (
    
    <div className="row">
            <div className="col-xl-6 col-sm-6 mb-3">
              <div className="card text-white bg-primary o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="mr-5"><h5>Criar Estágios</h5></div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/cadastrarestagio">
                  <span className="float-left"><h5>Exibir</h5></span>
                  <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-sm-6 mb-3">
              <div className="card text-white bg-warning o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-list"></i>
                  </div>
                  <div className="mr-5"><h5>Estágios</h5></div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="/cadastrarinstituicao">
                  <span className="float-left"><h5>Exibir</h5></span>
                  <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
            
        </div>
)

/*<div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-success o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-shopping-cart"></i>
                  </div>
                  <div className="mr-5">123 New Orders!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="#">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-3">
              <div className="card text-white bg-danger o-hidden h-100">
                <div className="card-body">
                  <div className="card-body-icon">
                    <i className="fas fa-fw fa-life-ring"></i>
                  </div>
                  <div className="mr-5">13 New Tickets!</div>
                </div>
                <a className="card-footer text-white clearfix small z-1" href="#">
                  <span className="float-left">View Details</span>
                  <span className="float-right">
                    <i className="fas fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div> */