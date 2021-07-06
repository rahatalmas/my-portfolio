import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const Home = () =>{
  return(
        <div className="hm-c">

        <div className="hm">
            <div className="h-intro">
                <div className="l-c">
                    <a className="l"><FontAwesomeIcon icon={faGithub} size="1x" /></a> 
                    <a className="l"><FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
                    <a className="l"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
                    <a className="l"><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                </div>
                <div className="i-t"> 
                    <h1>I am Rahat Almas</h1>
                    <p>I am a software engineer.<br/>
                     <span>I have many experiences in 
                         web development.
                     </span>
                    </p>
                    <button>Explore</button>
                </div>
            </div> 
            
            <div className="h-img-c">
                <img src="/srcImages/parrot.png" className="intro-img"/>
            </div>   
        </div>
        

        <div className="f-projects-c">
            <h2>projects</h2>
            <div>
                <div>
                   p1
                </div>
                <div>
                    p2
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Home;