import React, { useState } from "react";

const JuegoAdivinaNumero = () => {
  const [numeroSecreto] = useState(Math.floor(Math.random() * 100) + 1);
  const [intento, setIntento] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    const numero = parseInt(intento);
    if (numero < numeroSecreto) setMensaje("Más alto");
    else if (numero > numeroSecreto) setMensaje("Más bajo");
    else setMensaje("¡Correcto!");
  };

  return (
    <div>
      <h2>Adivina el Número</h2>
      <form onSubmit={manejarEnvio}>
        <input
          type="number"
          value={intento}
          onChange={(e) => setIntento(e.target.value)}
        />
        <button type="submit">Adivinar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default JuegoAdivinaNumero;
