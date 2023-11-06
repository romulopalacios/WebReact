import React, { useState } from 'react';
import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <body style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/fondo.jpg'})`, backgroundRepeat: 'no-repeat', width: '2030px' }}>
      <div className="App">
        <div className={`login-container ${isLoginFormVisible ? 'login' : 'register'}`}>
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo de tu aplicación" />
          </div>
          <h2>{isLoginFormVisible ? 'Iniciar Sesión' : 'Registrarse'}</h2>
          {isLoginFormVisible ? <LoginForm /> : <RegisterForm />}
          <p>
            {isLoginFormVisible ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{' '}
            <button type="button" onClick={toggleForm}>
              {isLoginFormVisible ? 'Registrarse' : 'Iniciar Sesión'}
            </button>
          </p>
        </div>
      </div>
    </body>
  );
}

export default App;
