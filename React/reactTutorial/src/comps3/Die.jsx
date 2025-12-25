


function Die(props){

    const diceID = props.id
    return(

        
        <button 
        onClick={() => props.hold(diceID)} 
        className={props.held ? "held":""}>
            {props.number}
        </button> 
        

    )
}
export default Die