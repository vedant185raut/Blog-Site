import React from 'react'
import {Link} from "react-router-dom";

// import logo from "../img/logo2.svg"
import boy from "../img/sboy.svg"
const Footer = () => {
  return (
    <footer className='footer'>
      {/* <div className="logo">
        <img src={logo} alt="" />
        </div>
        <div className="foot">
      <div className="boy">
       
        <div className="connect">
          <Link><ion-icon name="logo-linkedin"></ion-icon> </Link>
          <Link> <ion-icon name="logo-facebook"></ion-icon></Link>
          <Link> <ion-icon name="logo-github"></ion-icon></Link>
          <Link> <ion-icon name="logo-instagram"></ion-icon></Link>
          <Link> <ion-icon name="logo-discord"></ion-icon></Link>
          
        </div>
      </div>
      </div>
       */}

    <div className="welcome">
      <p>This is Website Designed by me for DBMS Activity.</p>

    </div>
    <div className="part">
      <div className="boy">

    <img  src={boy} alt="" />
      </div>
    <div className="message">
      <p> I love connecting with new people and to interact with them. If you Like my work then
        <br /> <br />
        <h2>Connect With Me</h2>
      </p>
    <div className="content">
          <Link ><ion-icon name="logo-linkedin" ></ion-icon> </Link>
          <Link> <ion-icon  name="logo-facebook"></ion-icon></Link>
          <Link> <ion-icon name="logo-github"></ion-icon></Link>
          <Link> <ion-icon name="logo-instagram"></ion-icon></Link>
          <Link> <ion-icon name="logo-discord"></ion-icon></Link>
          
        </div>
    </div>



    </div>
    <p>

    Made with ❤ and <b>React.js</b> copyright &copy; www.VRBloger.com. All rights reserved!
    </p>







       
    </footer>
  )
}

export default Footer
