import { usestate, useParams } from "react-router-dom";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer';
import Review1 from "./Review1";
import Review2 from "./Review2";

// import "./VideoPlayer.css"

function Skillvideoplayer() {
  const params = useParams()
  const id = params.id
  const namecourse = params.namecourse




  const base_url = "https://res.cloudinary.com/dlicvgh0a/image/upload/v1653364978/"

  const [fake, setFake] = useState([]);
  useEffect(() => {
    fakestore();
  }, [])
  const fakestore = async () => {
    const response = await axios.get(`http://localhost:8081/FindAllByIdSkills?id=${id}`);
    setFake(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    fakestore();
  }, [])

  return (
    <>

      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 ">{fake.namecourse}</span>
        </div>
      </nav>
      <div className="videoplayer">
        <ReactPlayer url={fake.videourl} width="100%"
          height="500px"
          controls={true} />
        <Review1 />
        <Review2 coursename={namecourse} />

        <Footer />
      </div>



    </>
  );
}
export default Skillvideoplayer
















