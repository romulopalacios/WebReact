import React from 'react';
import './styles.css'; // Asegúrate de que el nombre del archivo CSS coincida con el nombre real en tu proyecto

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
  };

  return (
    
    <form id="login-form" onSubmit={handleSubmit}>
      <input type="email" id="emailInput" placeholder="Correo electrónico" required />
      <input type="password" placeholder="Contraseña" required />
      <button type="submit"  id="sign-in">
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LoginForm;
