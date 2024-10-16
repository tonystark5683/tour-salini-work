import { useState } from "react";

import image from '../Images/bangalore.png';
const Cards=(props)=>{

  const [readmore,setReadmore]=useState(false)
 

    const description=readmore?props.data.info:`${props.data.info?.substring(0,120)}...`

    const readMoreHandler=()=>{
        setReadmore(prev=>!prev)
    }


    const removeTour=()=>{
        props.handlenotInterested(props.data.id);
    }

    console.log("card wala console",props.data.image)

    return ( 
        <div className="card">
          <img src={props.data.image} alt="" className="image"></img>
          <div className="tour_info">
             <div className="tour_details">
            <h4 className="tour_price">{props.data.price}</h4>
            <h4 className="tour_name">{props.data.name}</h4>
          </div>
          <div className="description">
            {description}
            <span onClick={readMoreHandler} className="readMore">
                {!readmore?'Read More':'Show Less'}
            </span>
              
          </div>
          </div>
         

          <button onClick={removeTour} className="btn">Not Interested</button>
        </div>
    )
}


export default Cards;