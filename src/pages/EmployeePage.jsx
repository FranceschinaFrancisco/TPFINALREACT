import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link para navegación interna
import './EmployeePage.css';

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/employees/${id}`, { method: 'DELETE' })
      .then(() => {
        setEmployees(employees.filter(employee => employee.id !== id));
        setSelectedEmployee(null);
      })
      .catch(error => console.error('Error deleting employee:', error));
  };
  
  const handleEdit = () => {
    if (selectedEmployee) {
      navigate(`/edit/${selectedEmployee.id}`);
    }
  };

  const handleAdd = () => {
    navigate('/add');
  };

  const handleRowClick = (employee) => {
    if (selectedEmployee?.id === employee.id) {
      setSelectedEmployee(null);
    } else {
      setSelectedEmployee(employee);
    }
  };

  return (
    <div className="employee-page">
      <div className="top-bar">
        <div className="company-name">JAVAREACTLAB</div>
        <Link to="/home" className="nav-button">Inicio</Link>
      </div>
      <div className="employee-list-container">
      <div className="footer-text">Lista de Empleados</div>
        <div className="action-buttons">
          <button onClick={handleAdd}>Agregar Nuevo Empleado</button>
          <button onClick={handleEdit} disabled={!selectedEmployee}>Modificar Empleado</button>
          <button onClick={() => handleDelete(selectedEmployee?.id)} disabled={!selectedEmployee}>Eliminar Empleado</button>
        </div>
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Puesto</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr
                key={employee.id}
                onClick={() => handleRowClick(employee)}
                style={{
                  backgroundColor: selectedEmployee?.id === employee.id ? 'rgba(255, 255, 255, 0.6)' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePage;
