import LoginForm from '@/components/forms/LoginForm';
import { PATH_ROUTES } from '@/constants';
import { loginWithEmailAndPassword } from '@/firebase/auth';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
      <Link to={PATH_ROUTES.reset_password}>¿Olvidaste tu contraseña?</Link>
    </div>
  );
}
