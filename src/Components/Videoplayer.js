import { usestate, useParams } from "react-router-dom";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer';
import Review2 from "./Review2";

import Review1 from "./Review1";


// import "./VideoPlayer.css"

function VideoPlayer() {
  const params = useParams()
  const id = params.id
  const coursename = params.coursename




  const base_url = "https://res.cloudinary.com/dlicvgh0a/image/upload/v1652243060/"
  const [fake, setFake] = useState([]);
  useEffect(() => {
    fakestore();
  }, [])
  const fakestore = async () => {
    const response = await axios.get(`http://localhost:8081/FindAllById?id=${id}`);
    setFake(response.data)
    console.log(response.data)
  }
  useEffect(() => {
    fakestore();
  }, [])

  return (
    <>

      <nav className="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 ">{fake.coursename}</span>
        </div>
      </nav>
      <div className="videoplayer">
        <ReactPlayer url={fake.videourl} width="100%"
          height="500px"
          controls={true} />
        <Review1 />
        <Review2 coursename={coursename} />

        <Footer />
      </div>



    </>
  );
}
export default VideoPlayer
















