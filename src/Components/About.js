import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ill from "../assets/n1.png"
import Footer from '../Components/Footer';

function About() {
    return (
        <>
            <nav class="navbar navbar navbar-dark bg-primary ">
                <div class="container-fluid">
                    <a class="navbar-brand mx-auto" href="#">About This page</a>
                </div>


            </nav>

            <div id="carouselExampleSlidesOnly" class="carousel slide mx-auto " data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={ill} className="d-block w-100  " height='200px' width='1000px' alt="..." />

                    </div>
                </div>
            </div>
            <div className=" p-4 ">
                <section className="mb-4">
                    <h3>
                        E-LEARNING
                    </h3>
                    <p class="fw-normal">
                        E-learning is a type of learning conducted digitally via electronic media, typically involving the internet.It can be accessed via most electronic devices including a computer, laptop, tablet or smartphone, making it a versatile and easy way for students to learn wherever they are. E-learning resources come in a variety of forms – from software programmes and digital courses to interactive online platform and apps.               </p>
                </section>
                <h3>E-LEARNING IN EDUCATION</h3>
                <section>
                    With so many schools across the UK currently closed, teachers and students are taking advantage of e-learning methods to continue their studies from home.Even before this recent crisis, many schools were already strong champions of edtech in the classroom, and creating a seamless and flexible learning experience through the use of digital platforms.There are many ways in which teachers have been implementing e-learning to continue the teaching of their curriculum. One major way is the use of virtual ‘classrooms’ or lessons, using video communication platforms like Zoom. The teacher is able to plan and teach lessons as normal, with all students attending the lessons from their own home. The great thing about Zoom is that it can be accessed on a phone as well as a computer, adding greater flexibility to students.
                </section>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </>

    )
}

export default About

// style={{width:'60%'}}