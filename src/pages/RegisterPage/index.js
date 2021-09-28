import RegisterForm from '@/components/forms/RegisterForm';
import { registerWithEmailAndPassword } from '@/firebase/auth';
import LandingLayout from '@/layouts/LandingLayout';
import getErrorMessage from '@/utils/getErrorMessage';
import getToastConfig from '@/utils/getToastConfig';
import { useToasts } from 'react-toast-notifications';

export default function RegisterPage() {
  const { addToast } = useToasts();

  const onSubmit = (data) => {
    registerWithEmailAndPassword(
      data.email,
      data.password,
      data.fullname,
    ).catch((error) => {
      addToast(getErrorMessage(error?.code), getToastConfig('error'));
    });
  };

  return (
    <LandingLayout>
      <h1>Register</h1>
      <RegisterForm onSubmit={onSubmit} />
    </LandingLayout>
  );
}
