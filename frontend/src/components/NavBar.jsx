import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Home from '../components/Home'

class NavBar extends React.Component {
	render() {
		return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            ARAC
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/biography" className="nav-link">
                  Biography
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  Projects
                </Link>
              </li>      
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
		)
	}
}

export default NavBar;