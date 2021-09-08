import Button from '@/components/shared/Button';
import { logout } from '@/firebase/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { useToasts } from 'react-toast-notifications';

export default function HomePage() {
  const { addToast } = useToasts();
  const onLogoutClick = () => {
    logout().catch((error) => {
      addToast(getErrorMessage(error?.code), getToastConfig('error'));
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <p>HomePage</p>
      <Button onClick={onLogoutClick}>Cerrar sesión</Button>
    </div>
  );
}
