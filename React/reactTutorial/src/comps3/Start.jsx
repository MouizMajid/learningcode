

import React from 'react'
import Die from './Die.jsx'
import Confetti from 'react-confetti'


function Start (){
    const [dices, setDices] = React.useState(() => generateDice())
    const gameWon = checkWin();
    const endButton = React.useRef(null);

    React.useEffect(() => {
        if(gameWon){
            endButton.current.focus()
        }
    }, [gameWon])

    function checkWin(){

        if(dices.every(die => die.isHeld) && dices.every(die => {
            return die.number===dices[0].number
        })){
            return true
        }else{
            return false 

        }
    }
    function newGame(){
        setDices(generateDice())
    }
    function generateDice() {
        const dicesArr = [];

        for(let i = 0; i < 10; i++){
            const rand = Math.floor(Math.random() * 6) + 1; 
            dicesArr.push({id: i, number: rand, isHeld: false})
        }
        
        return dicesArr;
    }
    function rand(){
        return Math.floor(Math.random() * 6) + 1; 
    }
    function rollDice(){
        setDices(prevDices => prevDices.map(obj => {
                return obj.isHeld ? obj :  {...obj, number: rand()}
            })
        )
    }
    function hold(id){
        setDices(prevDices => {
            return prevDices.map(obj => {
                return obj.id===id ? {...obj, isHeld: !obj.isHeld}: obj
            })
        }
        )
    }
    
    const diceComps = dices.map(diceObj => 
        <Die 
            key={diceObj.id} 
            held={diceObj.isHeld} 
            number={diceObj.number}
            hold={hold}
            id={diceObj.id} 
            />)

    return (
        <div className="component">
            <h1>Tenzies</h1>
            <p>Roll the dice until all dice are the same. Click on a die to hold it.</p>

            <div className="dices">
            {diceComps}           
            </div>

            {!gameWon ? 
            <button className="roll" onClick={rollDice}>
                Roll Dice
            </button> : 
            <div>
            <Confetti/>
            <button className="won" onClick={newGame} ref={endButton}>
                New Game
            </button>
            </div>
            }
            

        </div>
    )

}

export default Start 