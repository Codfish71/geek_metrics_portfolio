import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <i className="fa fa-snowflake-o fa-lg text-primary mr-2"></i>
            <strong>GeekMetrics</strong>
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="" className="nav-link font-italic">
                  {" "}
                  Home{" "}
                </a>
              </li>
              <li className="nav-item active">
                <a href="" className="nav-link font-italic">
                  {" "}
                  About{" "}
                </a>
              </li>
              <li className="nav-item active">
                <a href="" className="nav-link font-italic">
                  {" "}
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header