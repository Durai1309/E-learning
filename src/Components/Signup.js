import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios'


function Signup() {
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  var nav = useNavigate();
  var res;
  var nameError = document.getElementById("nameError");
  var passError = document.getElementById("passError");
  var emailError = document.getElementById("emailError");


  const handleRegister = async () => {
    if (userPassword.length <= 5 || userName.length < 3 || userEmail.length == 0) {
      nameError.innerHTML = "UserName Should Be Minimum 3 letters*";
      passError.innerHTML = "Password Should Be Minimum 6 letters*";
      emailError.innerHTML = "Mail Id is not valid*";
    }
    // else {
    // nameError.innerHTML =null;
    // passError.innerHTML =null;
    // emailError.innerHTML =null;

    try {
      res = await axios.post("http://localhost:8081/registerNewUser",
        {
          userName, userEmail, userPassword
        }
      )
      console.log(res)
      if (res.status === 200) {
        localStorage.setItem("user", res.data.userName)
        const data = res.data.jwtToken
        localStorage.setItem("token", data)
        alert("Registered Successfully")
        nav('/login1')
      }
    } catch {
      alert("Something went wrong")

    }
  }
  return (
    <div className='jjj'>
      <div className="signup">
        <form className='main'>
          <label className="fname bi bi-person-check-fill">UserName</label>
          <br />
          <input className="live" type="text" value={userName} onChange={(e) => setName(e.target.value)} id="fname" name="name" />
          <br />
          <p id="nameError" className='error'></p>
          <br />
          <label className="fname bi bi-envelope-open-fill">Email</label>
          <br />
          <input className="live" type="email" value={userEmail} onChange={(e) => setEmail(e.target.value)} id="fname" name="email" />
          <br />

          <p id=" emailError" className='error'></p>
          <br />
          <label className="fname  bi bi-arrow-right-square-fill">Password</label>
          <br />
          <input className="live" type="password" value={userPassword} onChange={(e) => setPassword(e.target.value)} id="lname" name="password" />
          <br />
          <p id="passError" className='error'></p>
          <br />
        </form>
        <button onClick={handleRegister} className=" plug bi bi-door-open btn btn-outline-dark">Signup</button>
        <br />
        <br />
        <div>
          <Link to='/login1'> Already a User?Login</Link>
        </div>
      </div>
    </div>
  );
}
export default Signup