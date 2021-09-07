import ResetPasswordForm from '@/components/forms/ResetPasswordForm';
import { sendPasswordResetEmail } from '@/firebase/auth';

export default function ResetPasswordPage() {
  const onSubmit = (data) => {
    sendPasswordResetEmail(data.email);
  };

  return (
    <div>
      <h1>Recuperar contraseña</h1>
      <ResetPasswordForm onSubmit={onSubmit} />
    </div>
  );
}
