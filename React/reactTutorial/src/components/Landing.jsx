import React from 'react'

function Landing() {

    const [ingredients, setIngredients] = React.useState(["1 cup a", "2 eggs", "1/2 cup of sugar"]);

    const ingredientList = ingredients.map((item, index) => <li key={index} >{item}</li>)
    
    

    function handleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);
        const newIngredient = formdata.get("ingredient");
        setIngredients(prevState => [...prevState, newIngredient]);
        
    }
    return(
        <div className="landing">
            <form className="searchBar" onSubmit={handleSubmit} >
                <input type="text" placeholder="e.g oregano"  name="ingredient" ></input>
                <input type="submit" value="+ Add ingredient"></input>
            </form>
            <ul> Ingredients on hand: 
                {ingredientList}
            </ul>
            <div className="getRecipe">
                <div className="text-content">
                    <h2>Ready for a recipe?</h2>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button>Get Recipe</button>
            </div>
        </div>
    )
}

export default Landing