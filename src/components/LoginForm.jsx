import useForm from '../hooks/useForm';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();

  const validate = (values) => {
    let errors = {};
    if (!values.user) errors.user = 'Usuario requerido';
    if (!values.password) errors.password = 'Contraseña requerida';
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    { user: '', password: '' },
    validate
  );

  return (
    <form onSubmit={handleSubmit(() => login(values.user, values.password))}>
      <div>
        <label>Usuario:</label>
        <input type="text" name="user" value={values.user} onChange={handleChange} />
        {errors.user && <p>{errors.user}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" name="password" value={values.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
