import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ill from '../assets/logo3.png'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

function Header() {
  return (


    <nav className="navbar navbar-expand-lg navbar-dark m-0 bg-primary">
      <a className="navbar-brand ps-4 " href="#"> <img src={ill} width='100' /></a>
      <ul className="navbar-nav ms-auto"  >
        <li className="nav-item pe-4">
          <Link to='/login2' className="  nav-link btn btn-primary bi bi bi-file-person " >About us</Link>
          {/* <a className="nav-link btn btn-primary bi bi bi-file-person " href="#About">About us</a> */}
        </li>
        <li className="nav-item pe-4 ">
          <Link to='/login1' className=" nav-link btn btn-primary bi bi bi-file-person " >Login</Link>
          {/* <a className="nav-link btn btn-primary  bi bi-box-arrow-in-right"  href="#">login</a> */}
        </li>
        {/* <li className="nav-item pe-4"> */}
        {/* <Link to='/Rev' className="nav-link btn btn-primary bi bi-book " >Review</Link> */}
        {/* <a className="nav-link btn btn-primary bi bi-box-arrow-in-right" href="#">sigup</a>  */}
        {/* </li> */}
      </ul>
    </nav>


  )
}

export default Header







