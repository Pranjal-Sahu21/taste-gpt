import { useState } from "react";
import Recipe from "./Recipe";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").trim().toLowerCase();

    if (!newIngredient) return;

    if (ingredients.includes(newIngredient)) {
      alert(`"${newIngredient}" is already in the list!`);
      event.currentTarget.reset();
      return;
    }

    setIngredients((prev) => [...prev, newIngredient]);
    event.currentTarget.reset();
  }

  function handleRemove(indexToRemove) {
    const ingredientToRemove = ingredients[indexToRemove];
    const confirmDelete = window.confirm(
      `Are you sure you want to remove "${ingredientToRemove}"?`
    );

    if (!confirmDelete) return;

    setIngredients((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          name="ingredient"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 ? (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(index)}
                  aria-label={`Remove ${ingredient}`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <div className="empty-state">
          🥕 Start by adding your first ingredient above! <br /> <br />
          <p id="alert-text">
            NOTE: Add at least two ingredients to get a recipe.
          </p>
        </div>
      )}

      <Recipe ingredients={ingredients} />
    </main>
  );
}
