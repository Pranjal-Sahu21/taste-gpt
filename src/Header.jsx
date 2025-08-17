import tasteGptLogo from "./image.png";

export default function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <img src={tasteGptLogo} alt="TasteGPT Logo" />
      <h1>TasteGPT</h1>

      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
