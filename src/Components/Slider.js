import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import ell from "../assets/elearning.png"
import all from "../assets/s1.jpg"
import nll from "../assets/hello.jpg"

function Slider() {
  return (
    <div id="carouselExampleInterval" class="carousel slide mx-auto" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src={ell} className="d-block w-100  " height='300px' width='50px' alt="..." />
        </div>

        <div class="carousel-item" data-bs-interval="2000">
          <img src={nll} className="d-block w-100  " height='300px' width='50px' alt="..." />
        </div>
        <div class="carousel-item">
          <img src={all} className="d-block w-100  " height='300px' width='50px' alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider


