import LoginForm from '@/components/forms/LoginForm';
import { PATH_ROUTES } from '@/constants';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={() => {}} />
      <Link to={PATH_ROUTES.reset_password}>¿Olvidaste tu contraseña?</Link>
    </div>
  );
}
