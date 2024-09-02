import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {

   

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">Sabka Vahan  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup" >
      <div className="navbar-nav">
            <Link to="/about" className='nav-link'>About</Link>
            <Link to="/signup" className='nav-link' >Signup</Link>
            <Link to="/logout" className='nav-link text-danger fw-bold' >Logout</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Nav