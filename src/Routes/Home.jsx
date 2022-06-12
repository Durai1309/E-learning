import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from '../Components/Slider';
import Learning from '../Components/learningcards';
import Left from '../Components/Left';
import Left1 from '../Components/Left1';
import Header from '../Components/header';
import Left2 from '../Components/Left2';
import Left3 from '../Components/Left3';
import Left4 from '../Components/Left4';
import Footer from '../Components/Footer';



export default function Home() {
  return (
    <div className='jo'>
      <Header />
      <Slider />
      <Left />
      <Left1 />
      <Left2 />
      <Left3 />
      <Left4 />
      <Learning />
      <Footer />





    </div>


  )
}
