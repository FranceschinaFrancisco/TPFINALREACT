import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewEmployeePage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/employees/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data));
  }, [id]);

  if (!employee) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{employee.name}</h1>
      <p>Email: {employee.email}</p>
      <p>Posición: {employee.position}</p>
    </div>
  );
};

export default ViewEmployeePage;
