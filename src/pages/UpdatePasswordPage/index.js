import UpdatePasswordForm from '@/components/forms/UpdatePasswordForm';
import { reauthenticate, updatePassword } from '@/firebase/auth';

export default function UpdatePasswordPage() {
  const onSubmit = (data) => {
    console.log(data);
    reauthenticate(data.current_password).then(() => {
      updatePassword(data.new_password);
    });
  };

  return (
    <div>
      <h1>Actualizar contraseña</h1>
      <UpdatePasswordForm onSubmit={onSubmit} />
    </div>
  );
}
