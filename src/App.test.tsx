import { screen } from '@testing-library/react';
import { render } from './test-utils';
import CurrencyConversionApp from './App';

jest.mock('./containers/Main', () => ({
  Main: () => <div>Main</div>,
}));

describe('CurrencyConversionApp Component', () => {
  test('renders CurrencyConversionApp component', () => {
    render(<CurrencyConversionApp />);

    expect(screen.getByText('Main')).toBeInTheDocument();
  });
});
