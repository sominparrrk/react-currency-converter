import React, { ReactElement } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

type AllTheProvidersProps = {
  children: React.ReactNode;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const render = (ui: ReactElement, options?: RenderOptions) => rtlRender(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
