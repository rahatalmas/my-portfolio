import React from 'react';
import './Home.css';
import Card from './subComponents/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faInstagram,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

const Home = () =>{
  return(
        <div className="hm-c">

        <div className="hm">
            <div className="h-intro">
                <div className="l-c">
                    <a className="l" href="https://github.com/rahatalmas" target="_blank"><FontAwesomeIcon icon={faGithub} size="1x" /></a> 
                    <a className="l" href="https://www.linkedin.com/in/rahat-almas-2683a6171/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="1x" /></a>
                    <a className="l" href="https://www.facebook.com/rahat.almas.5/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
                    <a className="l" href=""><FontAwesomeIcon icon={faInstagram} size="1x" /></a>
                </div>
                <div className="i-t"> 
                    <h1>I am Rahat Almas</h1>
                    <p>I am a computer engineer.<br/>
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
             <div className="p-h">
              <h4>my activities</h4>
              <p>I always try to use time properly.<br/>
               I do competetive programming, web development and 
               sometimes i do photography also.
               <br/>photography is my hobby<br/><br/>
                <span className="bar">________</span>
              </p> 
             </div>
            <div className="card-row">
               <div className="card-c" >
                   <Card
                        data2="web development"
                        data3="details"
                   />
                </div>
                <div className="card-c">
                    <Card 
                        data1="logo"
                        data2="title"
                        data3="details"
                   />
                </div>
                <div className="card-c" >
                   <Card 
                        
                        data1="logo"
                        data2="title"
                        data3="details"
                   />
                </div>
                <div className="card-c">
                    <Card 
                       data1="logo"
                       data2="title"
                       data3="details"
                   />
                </div>
                <div className="card-c" >
                   <Card      
                       data1="logo"
                       data2="title"
                       data3="details"
                   />
                </div>
                <div className="card-c">
                    <Card 
                       data1=""
                       data2="title"
                       data3="details"
                   />
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Home;