import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DeleteSkill.css';
import Footer from './Footer';

function DeleteReview() {
  const [id, setid] = useState('');
  console.log(id)

  const handle = async () => {
    const res = await axios.delete(`http://localhost:8081/DeleteByNameReview?id=${id}`)
    setid(res.data)

  }

  return (

    <>
      <div>
        <nav class="navbar navbar-dark bg-primary">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 mx-auto"> Review Delete</span>
          </div>
        </nav>
      </div>
      <div className='Delete'>
        <label className="kk">id</label>
        <br />
        <br />
        <input className="input " style={{ width: 1000 }} type="number" value={id} onChange={(e) => setid(e.target.value)} id="fname" name="name" />
        <br />
        <br />
        <br />

        <button className="btn btn-primary" onClick={handle} >Delete</button>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}


export default DeleteReview
