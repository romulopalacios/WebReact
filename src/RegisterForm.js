import React, { useState } from 'react';
import { validarEmail, validarContrasena, verificarContrasenas } from './Validaciones';
import './styles.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');

  const handleEmailInput = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    if (!validarEmail(emailValue)) {
      document.getElementById("resultadoEmail").textContent = "La dirección de correo electrónico no es válida.";
    } else {
      document.getElementById("resultadoEmail").textContent = "";
    }
  };

  const handleContrasenaInput = (e) => {
    const contrasenaValue = e.target.value;
    setContrasena(contrasenaValue);

    if (!validarContrasena(contrasenaValue)) {
      document.getElementById("resultadoContrasena").textContent = "La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.";
    } else {
      document.getElementById("resultadoContrasena").textContent = "";
    }
  };

  const handleConfirmarContrasenaInput = (e) => {
    const confirmarContrasenaValue = e.target.value;
    setConfirmarContrasena(confirmarContrasenaValue);

    if (!verificarContrasenas(contrasena, confirmarContrasenaValue)) {
      document.getElementById("mensajeContrasenas").textContent = "Las contraseñas no coinciden.";
    } else {
      document.getElementById("mensajeContrasenas").textContent = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarEmail(email) && validarContrasena(contrasena) && verificarContrasenas(contrasena, confirmarContrasena)) {
      // Aquí puedes manejar la lógica de registro si todas las validaciones son exitosas
    }
  };

  return (
    <form id="registro-form" onSubmit={handleSubmit}>
      <input
        type="email"
        id="registroEmailInput"
        placeholder="Correo electrónico"
        required
        value={email}
        onChange={handleEmailInput}
      />
      <p id="resultadoEmail" className="text-danger"></p>

      <input
        type="password"
        className="form-control"
        id="contrasena"
        placeholder="Contraseña"
        required
        value={contrasena}
        onChange={handleContrasenaInput}
      />
      <p id="resultadoContrasena" className="text-danger"></p>

      <input
        type="password"
        className="form-control"
        id="confirmarContrasena"
        placeholder="Confirmar contraseña"
        required
        value={confirmarContrasena}
        onChange={handleConfirmarContrasenaInput}
      />
      <p id="mensajeContrasenas" className="text-danger"></p>

      <button type="submit" id="registerinit">
        Registrarse
      </button>
    </form>
  );
}

export default RegisterForm;
