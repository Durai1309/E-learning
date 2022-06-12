
import axios from 'axios';
import React, { useState } from 'react';
import './Update.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Update() {


  const [namecourse, setnamecourse] = useState('');
  const [videourl, setvideourl] = useState('');
  const [description, setdescription] = useState('');
  const [imgurl, setimgurl] = useState('');
  const [videopath, setvideopath] = useState('');
  const [duration, setduration] = useState('');


  const handle = async () => {
    handle = await axios.post("http://localhost:8081/AddSkills",
      {
        namecourse, videourl, description, imgurl, duration, videopath
      }
    )
  }


  return (
    <>
      <div>
        <nav class="navbar navbar-dark bg-primary">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 mx-auto"> Course Update</span>
          </div>
        </nav>
      </div>
      <div className='container'>
        <div className='upload_container'>
          <br />
          <div className='form my-9'>
            <br />
            <label className="input_lable">namecourse</label>
            <input className="input " type="text" value={namecourse} onChange={(e) => setnamecourse(e.target.value)} id="fname" name="name" />
            <br />
            <br />
            <label className="input_lable">videourl</label>
            <input className="input " type="text" value={videourl} onChange={(e) => setvideourl(e.target.value)} id="fname" name="name" />
            <br />
            <br />
            <label className="input_lable">description</label>
            <input className="input " type="text" value={description} onChange={(e) => setdescription(e.target.value)} id="fname" name="name" />
            <br />
            <br />
            <label className="input_lable">imgurl</label>
            <input className="input " type="text" value={imgurl} onChange={(e) => setimgurl(e.target.value)} id="fname" name="name" />
            <br />
            <br />
            <label className="input_lable">videopath</label>
            <input className="input " type="text" value={videopath} onChange={(e) => setvideopath(e.target.value)} id="fname" name="name" />
            <br />
            <br />
            <label className="input_lable">duration</label>
            <input className="input " type="text" value={duration} onChange={(e) => setduration(e.target.value)} id="fname" name="name" />
            <br />
            <br />
            <button class="btn btn-primary" onClick={handle} >update</button>

          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  )
}

export default Update