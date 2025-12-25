import React from 'react'
function Recipe(props){


    const ingredientList = props.ingredients.map((item, index) => <p key={index} >{item}</p>)


    return(

        <div>
            <h2>Suggested Recipe</h2> <p>hello</p>
            Here is a recipe for whatever ingredients you listed: 
                {ingredientList}
            <p>
                Hello<br/>
                Hello<br/>
                Hello <br/>
                Hello<br/>
                Hello<br/><br/>
                Hello Hello<br/>
                Hello<br/>
                Hello <br/><br/>Hello<br/>
                Hello<br/>
                Hello Hello<br/>
                Hello<br/>
                Hello <br/>Hello<br/>
                Hello<br/>
                Hello Hello<br/>
                Hello<br/>
                Hello Hello<br/>
                Hello<br/>
                Hello Hello<br/>
                Hello<br/>
                Hello Hello<br/>
                Hello<br/>
                Hello<br/><br/>Hello<br/>
                Hello<br/>
                Hello Hello<br/>
                Hello<br/>
                Hello Hello<br/>
                Hello<br/>
                Hello Hello<br/><br/>
                Hello<br/>
                Hello Hello<br/>
                Hello<br/>
                Hello  <br/> 
            </p>
        </div>


    )
}

export default Recipe