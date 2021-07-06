import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'
const Nav = () =>{
    return(
        <div className="m-c">
            <div className="n-c">
                <div className="col1">
                     <h3>Life Of Almas</h3>
                </div>
                <div className="col-l">
                    <Link to="/" className="n-l">Home</Link>
                    <Link to="/about" className="n-l">About</Link>
                    <Link to="/projects" className="n-l">Projects</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;