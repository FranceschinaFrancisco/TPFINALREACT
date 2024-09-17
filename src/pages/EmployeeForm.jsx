import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EmployeePage.css';

const EmployeeForm = ({ isEdit }) => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isEdit && id) {
      // Cargar datos del empleado si estamos en modo edición
      fetch(`http://localhost:3000/employees/${id}`)
        .then(response => response.json())
        .then(employee => {
          setName(employee.name);
          setEmail(employee.email);
          setPosition(employee.position);
        })
        .catch(error => console.error('Error fetching employee:', error));
    }
  }, [id, isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
      // Modificar empleado existente
      fetch(`http://localhost:3000/employees/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, position }),
      })
      .then(() => navigate('/employees'))
      .catch(error => console.error('Error updating employee:', error));
    } else {
      // Agregar nuevo empleado
      fetch('http://localhost:3000/employees')
        .then(response => response.json())
        .then(employees => {
          // Encontrar el ID más alto y sumar 1
          const newId = employees.length ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
          const newEmployee = { id: newId, name, email, position };

          fetch('http://localhost:3000/employees', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEmployee),
          })
          .then(() => navigate('/employees'))
          .catch(error => console.error('Error adding employee:', error));
        });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isEdit ? 'Modificar Empleado' : 'Agregar Nuevo Empleado'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group user-icon">
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Ingrese el nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group user-icon">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Ingrese el email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group user-icon">
            <label htmlFor="position">Puesto</label>
            <input
              id="position"
              type="text"
              placeholder="Ingrese el puesto"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            {isEdit ? 'Guardar Cambios' : 'Agregar Empleado'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
