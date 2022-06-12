import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import Favid from './Favid';
import './Favcourse.css';


function Favcourse({ username }) {

  const [fake, setFake] = useState([]);
  var username;

  const fakestore = async () => {
    const response = await axios.get(`http://localhost:8081/FindAllByusername?username=${username}`);
    setFake(response.data)
    console.log("-------->", response.data);
  }

  useEffect(() => {
    username = localStorage.getItem("user");
    fakestore();
  }, [])


  return (
    <>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 mx-auto">Add your favorites course</span>
        </div>
      </nav>
      <div className='spaces'>
        <div className='row '>


          {fake.map((values) => {
            return (
              <>
                <Favid props={values.skillid} />
              </>
            )
          }
          )}
        </div>
      </div>
    </>
  )
}

export default Favcourse