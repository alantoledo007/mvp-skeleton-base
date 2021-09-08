import UpdatePasswordForm from '@/components/forms/UpdatePasswordForm';
import { reauthenticate, updatePassword } from '@/firebase/auth';
import { useToasts } from 'react-toast-notifications';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { useState } from 'react';
import SuccessMessage from '@/components/shared/SuccessMessage';
import { PATH_ROUTES } from '@/constants';

export default function UpdatePasswordPage() {
  const { addToast } = useToasts();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    reauthenticate(data.current_password)
      .then(() => {
        updatePassword(data.new_password)
          .then(() => setSuccess(true))
          .catch((error) => {
            addToast(getErrorMessage(error?.code), getToastConfig('error'));
          });
      })
      .catch((error) => {
        addToast(getErrorMessage(error?.code, true), getToastConfig('error'));
      });
  };

  return (
    <div>
      {success && (
        <SuccessMessage
          message="Actualizaste la contraseña correctamente"
          to={PATH_ROUTES.account.index}
        />
      )}
      <h1>Actualizar contraseña</h1>
      <UpdatePasswordForm onSubmit={onSubmit} />
    </div>
  );
}
