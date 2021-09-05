import { render, act } from '@testing-library/react';
import App from '@/App';

describe('<App />', () => {
  test('render ok', async () => {
    await act(async () => render(<App />));
  });
});
