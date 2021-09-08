import UpdateEmailForm from '@/components/forms/UpdateEmailForm';
import SuccessMessage from '@/components/shared/SuccessMessage';
import { PATH_ROUTES } from '@/constants';
import { reauthenticate, updateEmail } from '@/firebase/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

export default function UpdateEmailPage() {
  const { addToast } = useToasts();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    reauthenticate(data.password)
      .then(() => {
        updateEmail(data.email)
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
          message="Ya actualizaste tu correo electrónico"
          to={PATH_ROUTES.account.index}
        />
      )}
      <h1>Actualizar e-mail</h1>
      <UpdateEmailForm onSubmit={onSubmit} />
    </div>
  );
}
