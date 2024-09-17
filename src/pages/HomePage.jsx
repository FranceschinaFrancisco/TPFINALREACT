import React from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css';

import welcomeImage from '../assets/welcome-image.jpg';
import featuresImage from '../assets/feature-image.png';
import contactImage from '../assets/contact-image.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="top-bar">
        <div className="company-name">JAVAREACTLAB</div>
        <div className="nav-buttons">
          <Link to="/employees" className="nav-button">Empleados</Link>
        </div>
      </div>
      <div className="content-container">
        <div className="info-box">
          <img src={welcomeImage} alt="Bienvenida" className="info-image" />
          <h2>Bienvenido a JAVAREACTLAB</h2>
          <p>Un poco genérico el nombre, pero esta es la aplicación que cree para el último trabajo práctico del laboratorio y quería simular la apariencia de la página de una empresa. Si bien está estilizada a mi gusto con la gama de colores usada y apariencia de los íconos usados, pero asincerandome esta es la primera página web que diseñé en mi vida y la primera que codeo así que muchas cosas pueden estar mal, también quise asegurarme de que el diseño de la página sea intuitivo y fácil de usar.</p>
        </div>
        <div className="info-box">
          <img src={featuresImage} alt="Funcionalidades" className="info-image" />
          <h2>Nuestras Funcionalidades</h2>
          <p>Las funcionalidades que incluí fueron las pedidas en la consigna de trabajo práctico. Dando click en el botón "Empleados" en la esquina superior derecha te llevará a una lista de los empleados registrados en la base de datos, con la posibilidad de agregar nuevos empleados, además de poder seleccionarlos y así modificar los datos de los empleados existentes y eliminarlos.</p>
        </div>
        <div className="info-box">
          <img src={contactImage} alt="Contacto" className="info-image" />
          <h2>Contacto</h2>
          <p>Cualquier queja o pregunta me lo pueden dejar como comentario privado mediante la plataforma en la cual se hace entrega de este trabajo, además, también pueden contactarme mediante mi correo electrónico.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
