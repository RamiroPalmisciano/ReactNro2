import React, { useState } from "react";
import "./FormularioValidado.css";

const FormularioValidado = () => {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const [errores, setErrores] = useState({});

  const validar = (campo, valor) => {
    let mensaje = "";
    if (campo === "nombre" && !valor) mensaje = "El nombre es obligatorio";
    if (campo === "email" && !/\S+@\S+\.\S+/.test(valor)) mensaje = "Email inválido";
    if (campo === "password" && valor.length < 6) mensaje = "La contraseña debe tener al menos 6 caracteres";
    return mensaje;
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrores({ ...errores, [name]: validar(name, value) });
  };

  return (
    <form className="formulario">
      <div>
        <label>Nombre:</label>
        <input name="nombre" value={form.nombre} onChange={manejarCambio} />
        {errores.nombre && <p className="error">{errores.nombre}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input name="email" value={form.email} onChange={manejarCambio} />
        {errores.email && <p className="error">{errores.email}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input name="password" type="password" value={form.password} onChange={manejarCambio} />
        {errores.password && <p className="error">{errores.password}</p>}
      </div>
    </form>
  );
};

export default FormularioValidado;
