import RegisterForm from '@/components/forms/RegisterForm';
import { registerWithEmailAndPassword } from '@/firebase/auth';

export default function RegisterPage() {
  const onSubmit = (data) => {
    registerWithEmailAndPassword(data.email, data.password, data.fullname);
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
}
