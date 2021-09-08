import ResetPasswordForm from '@/components/forms/ResetPasswordForm';
import SuccessMessage from '@/components/shared/SuccessMessage';
import { PATH_ROUTES } from '@/constants';
import { sendPasswordResetEmail } from '@/firebase/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';

export default function ResetPasswordPage() {
  const { addToast } = useToasts();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email)
      .then(() => setSuccess(true))
      .catch((error) => {
        addToast(getErrorMessage(error?.code), getToastConfig('error'));
      });
  };

  return (
    <div>
      {success && (
        <SuccessMessage
          message="¡Listo! Te enviamos un correo para reestablecer tu contraseña."
          to={PATH_ROUTES.login}
        />
      )}
      <h1>Recuperar contraseña</h1>
      <ResetPasswordForm onSubmit={onSubmit} />
    </div>
  );
}
