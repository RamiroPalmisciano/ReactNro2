import React from "react";
import "./BotonesEventos.css";

const BotonesEventos = () => {
  const manejarClick = () => alert("¡Hiciste clic!");
  const manejarDobleClick = () => alert("¡Hiciste doble clic!");

  return (
    <div className="botones-eventos">
      <h2>Eventos de Botones</h2>
      <button onClick={manejarClick} onDoubleClick={manejarDobleClick}>
        Haz clic o doble clic
      </button>
    </div>
  );
};

export default BotonesEventos;
