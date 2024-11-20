import React, { useState, useEffect } from "react";
import "./NotasAutosave.css";

const NotasAutosave = () => {
  const [nota, setNota] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (nota) {
        setMensaje("Nota guardada automáticamente");
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      setMensaje(""); // Limpia el mensaje al escribir nuevamente
    };
  }, [nota]);

  return (
    <div className="notas-autosave">
      <h2>Notas con Autosave</h2>
      <textarea
        value={nota}
        onChange={(e) => setNota(e.target.value)}
        placeholder="Escribe tu nota aquí..."
      />
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </div>
  );
};

export default NotasAutosave;
