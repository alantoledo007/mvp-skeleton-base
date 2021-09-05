import { element } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/GlobalStyles';
import { themeDefault } from '@/styles/theme';

export default function AppWrapper({ children }) {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

AppWrapper.displayName = 'AppWrapper';

AppWrapper.propTypes = {
  children: element.isRequired,
};
