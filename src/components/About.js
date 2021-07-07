import React from 'react';
import './About.css'
const About = () =>{
    return(
       <div>
           <div className="a-m">
              <div className="a-card">
                 <div className="img-c">
                     <img className="a-card-img" src="srcImages/rahat.jpg"/>
                 </div>
                 <div className="a-text">
                     <h4>profiles: </h4>
                     <ul>
                         <li>Github</li>
                         <li>codeChef</li>
                         <li>codeforces</li>
                         <li>hackerRank</li>
                         <li>LinkedIn</li>
                     </ul>
                     <h4>skills:</h4>
                     <ul>
                         <li>C++</li>
                         <li>Java</li>
                         <li>Javascript</li>
                         <li>React</li>
                         <li>Nodejs(express)</li>
                         <li>Sql and noSql</li>

                     </ul>
                 </div>
              </div>
              <div className="a-d">
                  <h1>About Me</h1>
                  <h3>childhood: </h3>
                  <p>My name is B.M. Rahat Almas. i born on may5,1999.From my childhood
                      i was so curious about this world and i was so interested in science.
                      i always tried to know how everything works and how they make computers
                      and many advanced things like rocket, space station, video games or websites
                      etc. From this curiosity i started styding science.
                  </p>
                  <h3>skills: </h3>
                  <p>i learned a lot of things from childhood and still learing. I love to 
                      learn. I can do web development, app development, vide and photo editing.
                      i am good at linux operating system and i also have networking and ethical
                      hacking knowledge. i know c,c++,java and javascript programming language.
                      and i also know how to use React, Node js ,express libraries and frameworks.
                      I am good at React and Nodejs. i can also use both sql and no sql databases.
                  </p>
                  <h3>Hobbies: </h3>
                  <p>In my leisue time i do photography, skateboarding or i play football.
                     i love to travel a lot. i visited many adventurus and tourist spots.
                     Hill traking is my favourite. i also can play guiter. sound of guitar
                     refreshes my mind.
                  </p>
                  
              </div>
           </div>
       </div>
    );
}

export default About;