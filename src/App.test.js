import { render } from '@testing-library/react';
import App from './App';
describe('<App />', () => {
  test('render ok', () => {
    render(<App />);
  });
});
