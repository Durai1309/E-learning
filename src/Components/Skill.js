import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import axios from 'axios';
import './skill.css';
import Review1 from './Review1';




const Skill = () => {
  const [fake, setFake] = useState([]);
  const fakestore = async () => {
    const response = await fetch('http://localhost:8081/FindAllSkills');
    console.log("fffff", response);
    const jsonData = await response.json();
    setFake(jsonData);
  }
  useEffect(() => {
    fakestore();
  }, [])



  const Durai = async (skillid, username) => {
    console.log(skillid + " " + username)
    const handle = await axios.post("http://localhost:8081/Addfav",
      {
        username, skillid
      }
    )
  }



  const raj = async (skillid, username) => {
    console.log(skillid + " " + username)
    const handle = await axios.post("http://localhost:8081/Addwatchfav",
      {
        username, skillid
      }
    )
  }





  return (
    <>
      <div className='qwertyuiop'>
        <nav class="navbar navbar-dark bg-primary">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 mx-auto"> skill course </span>
          </div>
        </nav>
      </div>
      <div className='node'>
        <div className="container">
          <div className='row '>

            {fake.map((values) => {
              return (
                <>
                  <div className=' col-lg-3 col-md-5 col-sm-10 custom mt-10px'>
                    <div className="card shadow p-3 mb-4 bg-white rounded h-70 " >

                      <img src={values.imgurl} alt="sdd" className="d-block w-100  " height='250px' width='100px' />

                      {/* < button type="button" class="btn btn-info">coursevideo</button>  */}
                      <Link to={`/kill/${values.id}/${values.namecourse}/`} className="btn btn-info" >Course Video</Link>


                      <div className="card-body  ">
                        <h5>{values.namecourse}</h5>
                        <p>{values.duration}</p>
                        <p className='nee'>{values.description}</p>
                        <i className="bi bi-heart" onClick={() => { (Durai(values.id, localStorage.getItem("user"))) }}></i>
                        <i className=" ppp bi bi-bookmark-check " onClick={() => { raj(values.id, localStorage.getItem("user")) }} ></i>
                      </div>
                    </div>
                  </div>


                </>
              )
            }
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Skill;

{/* <Link to='/login2' className="nav-link btn btn-primary bi bi bi-file-person " >About us</Link> */ }






// <div className='mx-auto'>
//             <div className='row d-flex'>

//                 <div className='col-lg-3 col-md-6 col-sm-10'>
//                     <div >
//                     <div className="card shadow p-3 mb-5 bg-white rounded" >
//                     <img src={values.imgurl} alt="sdd"  className="d-block w-100  " height='300px' width='1000px' />
//                         <div className="card-body">
//                         <h5>{values.coursename}</h5>
//                         <p>{values.duration}</p>
//                          <p>{values.description}</p>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//                 </div>


// <div className="box">
// <div className="content">
// <h5>{values.coursename}</h5>
// <img src={values.imgurl} alt="sdd" /
// <p>{values.duration}</p>
// <p>{values.description}</p>


// </div>

// </div>


// <div class="row row-cols-1 row-cols-md-2 g-4">
//   <div class="col">
//     <div class="card">
//       <img src="..." class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>