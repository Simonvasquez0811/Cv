// src/components/Perfil.jsx
import "./perfil.css";
import React from "react";

export default function Perfil({ texto }) {
  return (
    <section>
      <h3>Perfil</h3>
      <p>{texto}</p>
      <hr />
    </section>
  );
  
}

