import { useState } from 'react'

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elvenGauntletesRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 5,
};

console.log(elvenShieldRecipe); console.log(elvenGauntletesRecipe);

import React from 'react'
import { fromJSON } from 'postcss';

const Recipes = () => {
    const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
      <button onClick={() => setRecipe(elvenGauntletesRecipe)}>Elven Gauntletes Recipe</button>

      <ul>
          {Object.keys(recipe).map((material) => (
              <li key={material}>
                  {material}: {recipe[material]}
              </li>
          ))}
      </ul>
    </div>
  )
}

export default Recipes
