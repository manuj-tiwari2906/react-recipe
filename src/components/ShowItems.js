import React from "react";
import {Link} from 'react-router-dom';

const ShowItems = ({ id, title, image }) => {
  return (
    
        <div key={id} className="col-md-4" style={{marginBottom: "2rem"}}>
          <div className="recipes__box">
            <img className="recipe__box-img" src={image} alt={title} />
            <div className="recipe__text">
                {/* This expression help us to trim the title to managable card of div */}
              <h5 className="recipes__title" >{title.length < 20 ? `${title}` : `${title.substring(0,25)}...`}</h5>
              <p className="recipes__subtitle">Publisher: <span>publisher</span></p>
            </div>
            <button className="recipe_buttons"><Link to={{
                pathname:`/recipe/${id}`, 
                state: {recipe: title}
                }}>View Recipe</Link></button>
          </div>
        </div>
      
  );
};

export default ShowItems;
