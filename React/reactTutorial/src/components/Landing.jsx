import React from 'react'
import Ingredients from './Ingredients';
import Recipe from './Recipe';

function Landing() {

    const [ingredients, setIngredients] = React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState("");
    const recipeSection = React.useRef(null)

    function toggleRecipe(){

        setRecipeShown(ingredients[ingredients.length -1])

    }

    React.useEffect(() => {

        if(recipeShown !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }

    }, [recipeShown])



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

            {ingredients.length > 0 ? <Ingredients ingredients={ingredients} toggleRecipe={toggleRecipe} ref={recipeSection}/> : null}

            {recipeShown ? <Recipe ingredients={ingredients}/> : null}

        </div>
    )
}

export default Landing