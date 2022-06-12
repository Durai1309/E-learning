import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import loginIcon from '../assets/c1.jpg';

function Login() {
  const [userName, setName] = useState('');
  const [userPassword, setPassword] = useState('');
  var nav = useNavigate();
  var res;
  var nameError = document.getElementById("nameError");
  var passError = document.getElementById("passError");
  const handleLogin = async () => {
    if (userPassword.length <= 5 || userName.length < 3) {
      nameError.innerHTML = "UserName Should Be Minimum 3 letters*";
      passError.innerHTML = "Password Should Be Minimum 6 letters*";
    }
    else {
      nameError.innerHTML = "";
      passError.innerHTML = "";
      try {
        res = await axios.post(" http://localhost:8081/authenticate",
          {
            userName, userPassword
          }
        )
        if (res.status === 200) {
          // alert("Login Success")
          console.log(res)
          localStorage.setItem("user", res.data.user.userName)
          const data = res.data.jwtToken
          localStorage.setItem("token", data)
          const role = res.data.user.role[0].roleName
          console.log(role)
          if (role === "Admin")
            nav('/Admin')
          else
            nav('/now')
        }
      } catch {

        alert("Invalid Username/Password")
      }
    }
  }

  return (
    <><div className='login-main-div'>
      <section className='login-section'>
        <div className='login-img-box'>
          {/* <img className='login-img' src={loginIcon} alt='login-img'/> */}
        </div>
        <div className='login-content-box'>
          <form className='login-form' action="">
            <h2 className='login-title'> login</h2>
            <div className='login-input-box'>
              <span className='login-label'>username </span>
              <input className='login-input' type="text" value={userName} onChange={(e) => { setName(e.target.value) }} />
              <p id="nameError" className='error'></p>

            </div>
            <div className='login-input-box'>
              <span className='login-label'>password</span>
              <input className='login-input' type="password" value={userPassword} onChange={(e) => { setPassword(e.target.value) }} />
              <p id="passError" className='error'></p>

            </div>
          </form>
          <br />

          <div className='login-input-box'>
            <button onClick={handleLogin} className='login-btn' type="submit" >Login</button>
          </div>
          <div className='login-input-box'>
            {/* <p className='login-para'>Don't have an account?<a className='login-signup' href="">Signup</a></p> */}
            <Link to='/signup' className='hhh'> Need an account? Signup</Link>

          </div>
        </div>
      </section>
    </div></>
  )
}


export default Login;


// <div className='hiii'>

// <form className='main'>
//   <label className="hhh bi bi-person-check-fill ">UserName</label>
//    <br />

//    <input className="live " type="text" value={userName} onChange={(e) => setName(e.target.value)} id="fname" name="name"
//     />
//    <br />
//    <p id="nameError" className='error'></p>
//    <br />
//    <label className="hhh bi bi-arrow-right-square-fill ">Password</label>
//    <br />
//    <input className="live" type="password" value={userPassword} onChange={(e) => setPassword(e.target.value)} id="lname" name="password" />
//   <br />
//   <p id="passError" className='error'></p>
//   <br />
//  </form>
//  <button onClick={handleLogin} className="plug bi bi-door-open btn btn-outline-dark " >Login</button>
//  <br />
//   <div>
//     <br />
//     <Link to='/signup' className='hhh'> Need an account? Signup</Link>
//   </div>
// </div>