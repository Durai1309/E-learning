import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import axios from "axios";



function Favid({ props }) {

  const [fake, setFake] = useState('');
  const fakestore = async () => {
    const response = await axios.get(`http://localhost:8081/FindAllByIdSkills?id=${props}`);
    setFake(response.data)
    console.log("------>", props)
  }

  useEffect(() => {
    fakestore();
  }, [])


  return (
    <>
      <div className='col-lg-3 col-md-5 col-sm-10 custom mt-10px ps-5'>

        <div className="card shadow p-3 mb-4 bg-white rounded h-70 " >
          <img src={fake.imgurl} alt="sdd" className="d-block w-100  " height='250px' width='1000px' />
          {/* < button type="button" class="btn btn-info">coursevideo</button>  */}
          <Link to={`/kill/${fake.id}/${fake.namecourse}/`} className="btn btn-info" >Course Video</Link>


          <div className="card-body  ">
            <h5>{fake.namecourse}</h5>
            <p>{fake.duration}</p>
            <p>{fake.description}</p>

          </div>
        </div>
      </div>

    </>

  )
}

export default Favid