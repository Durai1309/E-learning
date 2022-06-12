
import { usestate, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";


function Reviewbox({ coursename }) {



  const [fake, setFake] = useState([]);

  const fakestore = async () => {
    const response = await axios.get(`http://localhost:8081/FindAllByReviewcoursename?coursename=${coursename}`);
    setFake(response.data)
    console.log(response.data, coursename);
  }

  useEffect(() => {
    fakestore();
  }, [])



  return (
    <>

      <div className='row gx-0'>

        {fake.map((values) => {
          return (
            <div class=" lenovo card border-info mb-3">
              <div class="card-header"> {values.username}</div>
              <div class="card-header"> {values.coursename}</div>

              <div class="card-body">
                <p class="card-text ">{values.comment}</p>

              </div>
            </div>
          )
        }
        )}
      </div>

    </>
  );
}


export default Reviewbox