import React from "react";
import {Link} from 'react-router-dom'

const API_KEY = "5a156f644e824e8380ccfc7526c6592b";

class Recipe extends React.Component {
  state = {
    activeRecipe: [],
  };

  componentDidMount = async (e) => {
   
    const title = this.props.location.state.recipe ;
    const req = await fetch(
      `https://api.spoonacular.com/food/products/search?query=${title}&apiKey=${API_KEY}`
    );

    const res = await req.json();
    this.setState({ activeRecipe : res.products[0]})
    console.log(this.state.activeRecipe)
  };

  render() {

    const recipe = this.state.activeRecipe;
    
    return (
    <div className="container mb-4">
        { this.state.activeRecipe.length !==0 && <div className="active-recipe">
            <img className=" active-recipe__img" src={recipe.image} alt={recipe.title} />
            <h5 className="active-recipe__title">{recipe.title}</h5>
            <h4>Publisher :</h4>
            <p>Website :</p>
            <button className="active-recipe__button"><Link to="/">Go To Recipe</Link></button>
        </div>}
    </div>
    );
  }
}
export default Recipe;
