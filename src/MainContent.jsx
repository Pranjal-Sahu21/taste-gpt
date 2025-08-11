import React from "react";
import Recipe from "./Recipe";

export default function Main() {
  const [darkMode, setDarkMode] = React.useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient").trim();

    if (newIngredient) {
      setIngredients((prev) => [...prev, newIngredient]);
    }

    event.currentTarget.reset();
  }

  function handleRemove(indexToRemove) {
    setIngredients((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  }

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
          <p>🥕 Start by adding your first ingredient above!</p>
        </div>
      )}

      <Recipe ingredients={ingredients} />
    </main>
  );
}
