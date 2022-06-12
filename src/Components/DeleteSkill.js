import axios from 'axios';
import React, { useState } from 'react';
import './DeleteSkill.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';


function DeleteSkill() {

  const [namecourse, setnamecourse] = useState('');
  const handle = async () => {
    const res = await axios.delete(`http://localhost:8081/DeleteByNameSkill?namecourse=${namecourse}`)
    setnamecourse(res.namecourse)
  }

  return (
    <>
      <div>
        <nav class="navbar navbar-dark bg-primary">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 mx-auto"> Course Delete</span>
          </div>
        </nav>
      </div>
      <div className='Delete'>
        <label className="kk">namecourse</label>
        <br />
        <br />
        <input className="input " style={{ width: 1000 }} type="text" value={namecourse} onChange={(e) => setnamecourse(e.target.value)} id="fname" name="name" />
        <br />
        <br />
        <br />

        <button class="btn btn-primary" onClick={handle} >Delete</button>
      </div>
      <br />
      <br />
      <br />





      <Footer />
    </>

  )
}

export default DeleteSkill