import ResetPasswordForm from '@/components/forms/ResetPasswordForm';
import { sendPasswordResetEmail } from '@/firebase/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { useToasts } from 'react-toast-notifications';

export default function ResetPasswordPage() {
  const { addToast } = useToasts();

  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email).catch((error) => {
      addToast(getErrorMessage(error?.code), getToastConfig('error'));
    });
  };

  return (
    <div>
      <h1>Recuperar contraseña</h1>
      <ResetPasswordForm onSubmit={onSubmit} />
    </div>
  );
}
