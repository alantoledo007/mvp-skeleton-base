import LoginForm from '@/components/forms/LoginForm';
import { PATH_ROUTES } from '@/constants';
import { loginWithEmailAndPassword } from '@/firebase/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

export default function LoginPage() {
  const { addToast } = useToasts();

  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password).catch((error) => {
      addToast(getErrorMessage(error?.code), getToastConfig('error'));
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
      <Link to={PATH_ROUTES.reset_password}>¿Olvidaste tu contraseña?</Link>
    </div>
  );
}
