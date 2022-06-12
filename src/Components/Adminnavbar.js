import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Admincard from './Admincard';
import AdminSlider from './AdminSlider'
import Footer from './Footer'

function Adminnavbar() {
  var name = localStorage.getItem("user")
  var nav = useNavigate()

  function logout() {
    localStorage.clear()
    nav('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark m-0 bg-primary">
        <a className="navbar-brand ps-4" href="#"> {<h4 className='name'>  Welcome  {name}</h4>}</a>
        <ul className="navbar-nav ms-auto ">
          <a onClick={logout} className="nav-link  pe-5" href="#">log out</a>
        </ul>
      </nav>
      <div>
        <AdminSlider />
        <Admincard />
        <Footer />
      </div>
    </>
  )
}

export default Adminnavbar