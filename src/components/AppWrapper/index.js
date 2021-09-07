import { element } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { themeDefault } from '@/styles/theme';
import { ToastProvider } from 'react-toast-notifications';

export default function AppWrapper({ children }) {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}

AppWrapper.displayName = 'AppWrapper';

AppWrapper.propTypes = {
  children: element.isRequired,
};
