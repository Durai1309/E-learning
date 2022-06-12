import React from 'react'
import "./Admincard.css"
import { Link, useNavigate } from 'react-router-dom';


function Admincard() {
  var nav = useNavigate()
  function navi() {
    nav('/js')
  }
  function DeleteSkill() {
    nav('/tha')
  }
  function Courselist() {
    nav('/kill')
  }
  function DeleteReview() {
    nav('/qqq')
  }
  return (
    <>
      <div className='row gx-0'>
        <div className='col'>
          <div class=" lenovo card border-info mb-3">
            <div class="card-header">Course update</div>
            <div class="card-body">
              <p class="card-text ">The e-learning update course The new course will be updated.This course will be displayed on the user page.
                Happy learning !!!</p>
              <button onClick={navi} type="button " class=" vat btn btn-outline-info ps-3">Course update</button>
            </div>
          </div>

        </div>
        <div className='col'>
          <div class=" lenovo card border-info mb-3">
            <div class="card-header">Course Delete</div>
            <div class="card-body">
              <p class="card-text ">The e-learning delete course This will delete the course,which will be displayed on the user page.
                Happy learning !!!</p>
              <button onClick={DeleteSkill} type="button " class=" vat btn btn-outline-info ps-3">Course Delete</button>
            </div>
          </div>
        </div>

        <div className='col'>
          <div class=" lenovo card border-info mb-3">
            <div class="card-header"> Course list update </div>
            <div class="card-body">
              <p class="card-text ">The e-learning course list This can be used to see the update,of course,which was done by Admin.
                Happy learning !!!</p>
              <button onClick={Courselist} type="button " class=" vat btn btn-outline-info ps-3">Course list</button>
            </div>
          </div>

        </div>
        <div className='col'>
          <div class=" lenovo card border-info mb-3">
            <div class="card-header">Review Delete</div>
            <div class="card-body">
              <p class="card-text ">This e-learning delete review This will delete the review that was posted by the user as well as Admin.
                Happy learning !!!</p>
              <button onClick={DeleteReview} type="button " class=" vat btn btn-outline-info ps-3">Review Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admincard