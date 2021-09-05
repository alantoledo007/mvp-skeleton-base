import '@/firebase/starter';
import AppWrapper from '@/components/AppWrapper';
import Routes from '@/Routes';

export default function App() {
  return (
    <AppWrapper>
      <Routes />
    </AppWrapper>
  );
}
