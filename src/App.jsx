import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./MainContent";
import Footer from "./Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="page-container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main />
      <Footer/>
    </div>
  );
}
