import React from "react";
import clsx from "clsx";

function Keyboard(props){


    const arr = "abcdefghijklmnopqrstuvwxyz".split("");
    const keys = arr.map((char, index) => {
        const guessed = props.guess.includes(char);
        const inWord = props.word.includes(char);

        return <button 
        key={index} 
        disabled={guessed}
        className={clsx("keys", {correct: guessed&&inWord, wrong: guessed&&!inWord})} 
        onClick={() => props.stroke(char)}>
            
            {char.toUpperCase()}
        </button>
    } )

    return (
        <div className="keyboard">
            {keys}
        </div>

    )
}

export default Keyboard 