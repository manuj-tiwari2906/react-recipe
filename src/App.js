import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ShowItems from "./components/ShowItems";

const API_KEY = "5a156f644e824e8380ccfc7526c6592b";

class App extends Component {
  state = {
    recipes: [],
  };

  getRecipe = async (e) => {
    const query = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=${API_KEY}`
    );

    const data = await api_call.json();
    console.log(data.recipes)

    await this.setState({
      recipes: data.products,
    
    });
    
  };

  //  here we are fetching all the data from the user
  // Recipe inside this method is getting used inside the componentDidMount

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes : recipes})
  }

  componentDidUpdate = () => {
    // First thing to be executed after the component updates, and the component updates when the state changes
    const recipes = JSON.stringify(this.state.recipes)
    localStorage.setItem("recipes", recipes)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />

        {console.log(this.state.recipes)}

        <div className="container">
          <div className="row">
            {this.state.recipes.map((recipe) => {
              return <ShowItems key={recipe.id} {...recipe} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
