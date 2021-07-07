import React from 'react';
import './Card.css';
// <div className="i-c"><img src={imgData} className="card-img"/></div>
const Card =({imgData,data1,data2,data3})=>{
    return(
       <div>
        <div className="card">
             <div className="text-c"> 
                 <h4>{data1}</h4>
                 <h3>{data2}</h3>
                 <p>{data3}</p>
             </div>
        </div>
    </div>
    );
}

export default Card;