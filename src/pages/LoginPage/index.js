import LoginForm from '@/components/forms/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={() => console.log('sssss')} />
    </div>
  );
}
