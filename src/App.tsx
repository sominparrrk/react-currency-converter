import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import { Main } from './containers/Main';

const CurrencyConversionApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  );
};

export default CurrencyConversionApp;
