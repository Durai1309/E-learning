import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'



function Footer() {
  return (

    <footer className="bg-primary text-center text-white">
      <div className="container p-4">
        <section className="">
          <p>
            Online learning is education that takes place over the Internet. It is often referred to as “e- learning” among other terms. However, online learning is just one type of “distance learning” - the umbrella term for any learning that takes place across distance and not in a traditional classroom.
          </p>
        </section>

        <div className="yyy p-1 " >
          <p className="">illusion </p>
        </div>

        <div className='AAA'>
          <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569897%7Ce%7Cfacebook%20login%7C&placement=&creative=589460569897&keyword=facebook%20login&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221912%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1409285535%26loc_physical_ms%3D9050513%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwyryUBhBSEiwAGN5OCHSDnPdrTB-LSSr4Qq195Os6Kpb0FeFHtIWKF6NdwWkvcZ7k2u59FBoCVl4QAvD_BwE" >
            <i className="bi bi-facebook px-2 text-white " ></i>
          </a>
          <a href="https://www.instagram.com/accounts/login/">
            <i className="bi bi-instagram px-2 text-white "></i>
          </a>
          <a href="https://www.google.com/search?q=linkedin+login&oq=&aqs=chrome.1.35i39i362l8.85230j0j7&sourceid=chrome&ie=UTF-8">
            <i className="bi bi-linkedin px-2 text-white"></i>
          </a>
          <a href="https://twitter.com/i/flow/login" >
            <i className="bi bi-twitter px-2 text-white"></i>
          </a>
        </div>

      </div>
    </footer>



  )
}

export default Footer


