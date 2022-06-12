import React from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Video from '../Components/Video'
import { Link, useNavigate } from 'react-router-dom';



function Sidebar() {
  var name = localStorage.getItem("user")
  var nav = useNavigate()
  function logout() {
    localStorage.clear()
    nav('/')
  }
  function navi() {
    nav('/')
  }
  function nai() {
    nav('/login2')
  }
  function ni() {
    nav('/Kill')
  }

  function n() {
    nav('/1')
  }
  function C() {
    nav('/2')
  }

  function html() {
    nav('/3')
  }

  function javascript() {
    nav('/4')
  }



  function favcoursepost() {
    nav('/course')
  }

  function Watchlater() {
    nav('/Watch')
  }


  return (
    <>
      <div className="tool-bar ">
        <div className="title ms-auto "> {<h4 className='name'>  Welcome  {name}</h4>}

        </div>

        <div className=' durai'>
          <div className="sidebar ">
            <li onClick={navi}><i className="bi bi-house-heart"></i>Home</li>
            <li onClick={ni}><i className="bi bi-book"></i>Skill</li>
            <div className="dropdown">
              < li className=" bi bi-pencil-square dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" > Exam</li>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li onClick={n}><a className="dropdown-item" href="#">JAVA</a></li>
                <li onClick={C}><a className="dropdown-item" href="#">C</a></li>
                <li onClick={html}><a className="dropdown-item" href="#">HTML</a></li>
                <li onClick={javascript}><a className="dropdown-item" href="#">JAVASCRIPT</a></li>
              </ul>
            </div>
            {/* <li><i className="bi bi-person-rolodex"></i>contact us</li> */}
            <li onClick={nai}><i className="bi bi-file-earmark-person"></i>About us</li>
            <li onClick={favcoursepost} ><i className="bi bi-bookmark-star"></i>fav list</li>
            <li onClick={Watchlater}><i className="bi bi-bookmark-heart"></i>Watch later</li>
            <li onClick={logout}><i className="bi bi-door-closed "></i>logout</li>
            {/* <li>   <Link to='/' className="bi bi-door-closed " >log out</Link> </li> */}
            {/* <li><i className="bi bi-door-closed "></i>favcourses</li> */}

          </div>
        </div>
      </div>
      <div className=' hii w-75 ' style={{ marginLeft: '20%' }}>

        <Video />
      </div>
    </>


  )
}

export default Sidebar