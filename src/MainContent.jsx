import { useEffect, useState } from "react";
import Recipe from "./Recipe";

export default function Main() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [ingredients, setIngredients] = useState([]);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

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
    setIngredients((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  }

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <main>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️" : "🌙"}
      </button>

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
          <p>
            🥕 Start by adding your first ingredient above! <br /> <br />
            <p id="alert-text">
              NOTE: Add at least two ingredients to get a recipe.
            </p>
          </p>
        </div>
      )}

      <Recipe ingredients={ingredients} />
    </main>
  );
}
