import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EmployeePage from './pages/EmployeePage';
import ViewEmployeePage from './pages/ViewEmployeePage';
import EmployeeForm from './pages/EmployeeForm';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/employees" element={<PrivateRoute><EmployeePage /></PrivateRoute>} />
          <Route path="/employees/:id" element={<PrivateRoute><ViewEmployeePage /></PrivateRoute>} />
          <Route path="/add" element={<PrivateRoute><EmployeeForm isEdit={false} /></PrivateRoute>} />
          <Route path="/edit/:id" element={<PrivateRoute><EmployeeForm isEdit={true} /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
