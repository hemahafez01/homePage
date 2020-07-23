import React from 'react';
import Profile from './img/ProfilePic.png';
import logo from './img/logo.svg'
import Arrow from './img/arrow.webp'
import Linkedin from './img/linkedin.png'
import Github from './img/github.svg'
import FB from './img/fb.png'

import './App.css';

function App() {
  return(
    <div>
      <div class="header flex-row">
        <div class="logo">
          <a href="www.google.com"><img src={logo} alt=""/></a>
        </div>
        <div class="navigation">
          <nav class=" nav flex-row">
            <button>HOME</button>
            <button>WORKS</button>
            <button>REVIEWS</button>
            <button>BLOG</button>
          </nav>
        </div>
      </div>
      <div class="main flex-row">
        <div class="describtion">
          <h1>Ebrahem Hafez</h1>
          <p>Structural Engineer <span>/</span> FrontEnd Developer <span>/</span> Translator </p>
          <button class="main-button">WATCH WORK NOW</button>
        </div>
        <div class="main-photo">
          <img src={Profile} alt="main "/>
        </div>
      </div>
      <div class="footer flex-row">
        <div class="self-ad">
          <h5>New Client?</h5>
          <h3>Hire me now</h3>
        </div>
        <div class="flex-row">
          <button class="linkedin"><img src={Linkedin}/> </button>
          <button class="github"><img src={Github} /> </button>
          <button class="fb"><img src={FB}/></button>
          <button class="long">SEND MESSAGE <big><big><big>&#8594;</big></big></big></button>
        </div>
      </div>
    </div>
  ) 
}

export default App;
