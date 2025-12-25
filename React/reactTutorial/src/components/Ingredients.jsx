
import React from 'react'

function Ingredients(props){

    const ingredientList = props.ingredients.map((item, index) => <li key={index} >{item}</li>)


    return (

        <div>
            <ul> Ingredients on hand: 
                {ingredientList}
            </ul>
 
            {props.ingredients.length > 3 ? 
            <div className="getRecipe">
                <div className="text-content" ref={props.ref}>
                    <h2>Ready for a recipe?</h2>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.toggleRecipe}>Get Recipe</button>
            </div> : null}
        </div>

    )
}


export default Ingredients