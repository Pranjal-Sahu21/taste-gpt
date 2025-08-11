import React from "react";

export default function Recipe({ ingredients }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [recipe, setRecipe] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function getRecipeDetails(id) {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=80364dead89c4508b558aca3789bf2ba`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch recipe details.");
    }
    return await response.json();
  }

  async function handleGetRecipe() {
    setIsLoading(true);
    setError(null);
    setRecipe(null);

    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(
          ","
        )}&number=1&apiKey=80364dead89c4508b558aca3789bf2ba`
      );
      if (!response.ok) {
        throw new Error("Error fetching recipe.");
      }

      const recipes = await response.json();
      if (recipes.length > 0) {
        const detailedRecipe = await getRecipeDetails(recipes[0].id);
        setRecipe(detailedRecipe);
      } else {
        setError("No recipes found for the given ingredients.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
            <button onClick={handleGetRecipe}>Get a recipe</button>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="loader">
          <p>🍳 Finding the best recipe for you...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>⚠️ {error}</p>
        </div>
      )}

      {recipe && (
        <div className="recipe-details">
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />

          <h3>🧂 Ingredients:</h3>
          <ul>
            {recipe.extendedIngredients.map((item, index) => (
              <li key={index}>{item.original}</li>
            ))}
          </ul>

          <h3>👨‍🍳 Instructions:</h3>
          {recipe.analyzedInstructions.length > 0 ? (
            <ul>
              {recipe.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ul>
          ) : (
            <p>No instructions provided.</p>
          )}
        </div>
      )}
    </>
  );
}
