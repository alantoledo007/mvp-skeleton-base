import UpdateEmailForm from '@/components/forms/UpdateEmailForm';
import { reauthenticate, updateEmail } from '@/firebase/auth';

export default function UpdateEmailPage() {
  const onSubmit = (data) => {
    reauthenticate(data.password).then(() => {
      updateEmail(data.email);
    });
  };

  return (
    <div>
      <h1>Actualizar e-mail</h1>
      <UpdateEmailForm onSubmit={onSubmit} />
    </div>
  );
}
