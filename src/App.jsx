import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./MainContent";

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
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main />
    </>
  );
}
