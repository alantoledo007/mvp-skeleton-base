import UpdatePasswordForm from '@/components/forms/UpdatePasswordForm';
import { reauthenticate, updatePassword } from '@/firebase/auth';
import { useToasts } from 'react-toast-notifications';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';

export default function UpdatePasswordPage() {
  const { addToast } = useToasts();

  const onSubmit = (data) => {
    reauthenticate(data.current_password)
      .then(() => {
        updatePassword(data.new_password).catch((error) => {
          addToast(getErrorMessage(error?.code), getToastConfig('error'));
        });
      })
      .catch((error) => {
        addToast(getErrorMessage(error?.code, true), getToastConfig('error'));
      });
  };

  return (
    <div>
      <h1>Actualizar contraseña</h1>
      <UpdatePasswordForm onSubmit={onSubmit} />
    </div>
  );
}
