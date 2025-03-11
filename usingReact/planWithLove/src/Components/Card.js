import { useState } from "react";


function Card({id,image,info,price,name,removeTour}){
    const[readmore,setReadmore]=useState(false);
    const discription=readmore?info:`${info.substring(0,200)}....`; 

    function readmoreHandler(){
        setReadmore(!readmore);
    }
    
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tourDetails">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4> 
                </div>
                <div className="discription">
                    {discription}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore?`show less`:`read more`}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Intrested
            </button>
        </div>
    );
}

export default Card;