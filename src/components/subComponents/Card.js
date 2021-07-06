import React from 'react';
import './Card.css';
const Card =({imgData,data1,data2,data3,data4})=>{
    return(
       <div>
        <div className="card">
            <div className="i-c"><img src={imgData} className="card-img"/></div>
             <div className="text-c"> 
                 <p><br/>{data1}<br/>{data2}<br/>{data3}<br/>{data4}<br/></p>
                 <p> <a></a> <a></a> <a></a> </p>
             </div>
        </div>
    </div>
    );
}

export default Card;