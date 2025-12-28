import React from "react";
import clsx from "clsx";


function Word(props){
    
    const arr = props.wword.split("");
    const words = arr.map((char, index) => {
        const right = props.guess.includes(char);
        return ( <span 
        key={index} 
        className="letter">
            {right? char.toUpperCase(): " "}
        </span> )
    } )

    return (
        <div className="word">
            {words}
        </div>

    )
}

export default Word 