import React from "react";
import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="text-bg-dark p-5">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="fs-4 fw-bold d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              Monica.
            </Link>

            <ul className="mx-4 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/about" className={({isActive})=>`nav-link px-2 ${isActive ? "text-light" : "text-secondary"}`}>About</NavLink></li>
              <li><NavLink to="/services" className={({isActive})=>`nav-link px-2 ${isActive ? "text-light" : "text-secondary"}`}>Services</NavLink></li>
              <li><NavLink to="/journal" className={({isActive})=>`nav-link px-2 ${isActive ? "text-light" : "text-secondary"}`}>Journal</NavLink></li>
              <li><NavLink to="contact" className={({isActive})=>`nav-link px-2 ${isActive ? "text-light" : "text-secondary"}`}>Contact</NavLink></li>
            </ul>


            <div className="text-end">
              <button type="button" className="btn btn-warning px-4 py-3"><NavLink to="/contact" className="text-black text-decoration-none">Let's Work Together</NavLink></button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;


