import React, { useState } from "react";
import "./GaleriaImagenes.css";

const GaleriaImagenes = () => {
  const imagenes = [
    "https://via.placeholder.com/300x200/FF0000",
    "https://via.placeholder.com/300x200/00FF00",
    "https://via.placeholder.com/300x200/0000FF",
  ];

  const [index, setIndex] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") setIndex((prev) => (prev + 1) % imagenes.length);
    if (e.key === "ArrowLeft") setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="galeria">
      <img src={imagenes[index]} alt={`Imagen ${index + 1}`} />
    </div>
  );
};

export default GaleriaImagenes;
