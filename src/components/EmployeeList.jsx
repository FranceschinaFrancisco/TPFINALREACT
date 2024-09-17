import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div>
      <h2>Lista de Empleados</h2>
      <Link to="/employees/create">Crear Empleado</Link>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link to={`/employees/${employee.id}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
