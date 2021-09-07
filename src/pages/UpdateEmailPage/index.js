import UpdateEmailForm from '@/components/forms/UpdateEmailForm';
import { reauthenticate, updateEmail } from '@/firebase/auth';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { useToasts } from 'react-toast-notifications';

export default function UpdateEmailPage() {
  const { addToast } = useToasts();

  const onSubmit = (data) => {
    reauthenticate(data.password)
      .then(() => {
        updateEmail(data.email).catch((error) => {
          addToast(getErrorMessage(error?.code), getToastConfig('error'));
        });
      })
      .catch((error) => {
        addToast(getErrorMessage(error?.code, true), getToastConfig('error'));
      });
  };

  return (
    <div>
      <h1>Actualizar e-mail</h1>
      <UpdateEmailForm onSubmit={onSubmit} />
    </div>
  );
}
