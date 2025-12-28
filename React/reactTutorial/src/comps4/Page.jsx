import React from "react";
import Keyboard from './Keyboard.jsx'
import Word from './Word.jsx'
import clsx from "clsx";
import { languages } from "./languages.js";

function Page(){
    const [word, setWord] = React.useState("react");
    const [guess, setGuess] = React.useState([]);

    const attempts = guess.reduce((sum, val) => {
        return word.includes(val) ? sum : sum+1; }, 0)
    
    function stroke(key){
        setGuess(prevGuess => {
            return prevGuess.includes(key) ? prevGuess : [...prevGuess, key];
        })
        console.log(guess)
    }

    const langs = languages.map((item, index) => {
        const dead = (index < attempts)
        return <div key={index} className={clsx("langs", {lost: dead})} style={{ backgroundColor: item.backgroundColor, color: item.color }} >{item.name}</div>
    })

    return (
        <div className="full">
            <header>
            <h1>
                Assembly: Endgame
            </h1>
            <p>
                Save the programming languages from Assembly!
            </p>
            </header>
            

            <div className="status">
                <h2>You Win!</h2>
                <p>Well done</p>
            </div>
            <div className="lcont">
                {langs}
            </div>


            <Word guess={guess} wword={word}/>
            <Keyboard stroke={stroke} guess={guess} word={word}/>

            <button className="end">
                New Game
            </button>

        </div>
    )
}

export default Page 