import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';





const Video = () => {
  const [fake, setFake] = useState([]);
  //  useEffect(()=>{
  //    fakestore();
  //  },[])
  const fakestore = async () => {
    const response = await fetch('http://localhost:8081/FindAll');
    const jsonData = await response.json();
    setFake(jsonData);
    console.log(response.data)
  }
  useEffect(() => {
    fakestore();
  }, [])

  return (
    <>
      <div >
        <div className="container">
          <div className='row '>

            {fake.map((values) => {
              return (
                <>

                  <div className='col-lg-3 col-md-5 col-sm-10 custom mt-10px'>

                    <div className="card shadow p-3 mb-4 bg-white rounded h-70 " >
                      <img src={values.imgurl} alt="sdd" className="d-block w-100  " height='250px' width='1000px' />
                      {/* < button type="button" class="btn btn-info">coursevideo</button>  */}
                      <Link to={`/wow/${values.id}/${values.coursename}/`} className="btn btn-info" >Course Video</Link>


                      <div className="card-body  ">
                        <h5>{values.coursename}</h5>
                        <p>{values.duration}</p>
                        <p>{values.description}</p>
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

    </>
  );
}
export default Video;

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