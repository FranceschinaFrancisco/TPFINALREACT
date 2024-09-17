
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../context/AuthContext'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password); 
      navigate('/home'); 
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-page">
      <div className="top-bar">
        <div className="company-name">JAVAREACTLAB</div>
      </div>

      <div className="login-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group user-icon">
            <label htmlFor="username">Usuario</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Ingresa tu usuario" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group password-icon">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Ingresa tu contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Ingresar</button>

          <div className="extra-texts">
            <p className="remember-me">
              <input type="checkbox" id="remember" /> Recuérdame
            </p>
            <p className="forgot-password">Olvidaste tu contraseña?</p>
          </div>
        </form>
      </div>
      <div className="register-text">
        <p>No tienes una cuenta? <a href="/register">Regístrate</a></p>
      </div>  
    </div>
  );
};

export default LoginPage;
