import React from "react";
import Keyboard from './Keyboard.jsx'
import Word from './Word.jsx'
import clsx from "clsx";
import { languages } from "./languages.js";
import { getFarewellText } from "./messages.js";
import {getWord} from "./words.js"
import Confetti from 'react-confetti'

function Page(){
    const [word, setWord] = React.useState(() => getWord());
    const [guess, setGuess] = React.useState([]);


    console.log(word)
    const attempts = guess.reduce((sum, val) => {
        return word.includes(val) ? sum : sum+1; }, 0)
    const gameLost = attempts >= languages.length - 1; 
    const gameWon = word.split("").every(char => guess.includes(char));
    const gameOver = gameWon || gameLost;
    
    const lastGuess = guess[guess.length-1]; 
    const lastGuessCorrect = lastGuess && word.includes(lastGuess); 
    const farewell = (attempts > 0 && !lastGuessCorrect) ? getFarewellText(languages[attempts - 1].name) : "";
    
    function stroke(key){
        setGuess(prevGuess => {
            return prevGuess.includes(key) ? prevGuess : [...prevGuess, key];
        })
    }
    
    function newGame(){
        setGuess([]);
        setWord(getWord());

    }

    const langs = languages.map((item, index) => {
        const dead = (index < attempts) && index !== 8
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
            
           
            <div
                    className={clsx("status", {glost: gameLost, gwon: gameWon, farewell: !lastGuessCorrect&&!gameOver&&guess.length>0})}
                > 
                {gameOver ? (
                    gameLost ?
                    <><h2>You Lost</h2>
                    <p>stupid</p></> :  
                    <><h2>You Won!</h2>
                    <p>"good job"</p>
                    <Confetti recycle={false} numberOfPieces={1000}/></> 
                    ) :     
                    <><p>{farewell}</p>
                    </>}
            </div>
            

            
            <div className="lcont">
                {langs}
            </div>


            <Word guess={guess} wword={word} gameLost={gameLost}/>
            <Keyboard stroke={stroke} guess={guess} word={word} />

            {(gameOver )&& 
            <button className="end" onClick={() => newGame()}>
                New Game
            </button>
            }   

        </div>
    )
}

export default Page 