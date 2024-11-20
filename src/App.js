import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GaleriaImagenes from "./components/GaleriaImagenes";
import FormularioValidado from "./components/FormularioValidado";
import JuegoAdivinaNumero from "./components/JuegoAdivinaNumero";
import BotonesEventos from "./components/BotonesEventos";
import NotasAutosave from "./components/NotasAutosave";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Galería</Link> | 
        <Link to="/formulario">Formulario</Link> | 
        <Link to="/juego">Juego</Link> | 
        <Link to="/botones">Botones</Link> | 
        <Link to="/notas">Notas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<GaleriaImagenes />} />
        <Route path="/formulario" element={<FormularioValidado />} />
        <Route path="/juego" element={<JuegoAdivinaNumero />} />
        <Route path="/botones" element={<BotonesEventos />} />
        <Route path="/notas" element={<NotasAutosave />} />
      </Routes>
    </Router>
  );
};

export default App;
