import React from 'react'

function Landing() {

    const [ingredients, setIngredients] = React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState(false);

    const ingredientList = ingredients.map((item, index) => <li key={index} >{item}</li>)
    
    

    function addIngredient(formdata) {
        const newIngredient = formdata.get("ingredient");
        setIngredients(prevState => [...prevState, newIngredient]);
    }
    return(
        <div className="landing">

            <form className="searchBar" action={addIngredient}  >
                <input type="text" placeholder="e.g oregano"  name="ingredient" required></input>
                <input type="submit" value="+ Add ingredient"></input>
            </form>

            {ingredients.length > 0 ? <ul> Ingredients on hand: 
                {ingredientList}
            </ul> : null}
            
            {ingredients.length > 3 ? 
            <div className="getRecipe">
                <div className="text-content">
                    <h2>Ready for a recipe?</h2>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={() => setRecipeShown(prev => !prev)}>Get Recipe</button>
            </div> : null }
             
             

            {recipeShown ? <div><h2>Suggested Recipe</h2> <p>hello</p></div> : null}
            




        </div>
    )
}

export default Landing