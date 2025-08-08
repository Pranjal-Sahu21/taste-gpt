import React from "react";

export default function Footer({ style }) {
  return (
    <footer className="app-footer" style={style}>
      <p>© {new Date().getFullYear()} TasteGPT. All rights reserved.</p>
    </footer>
  );
}
