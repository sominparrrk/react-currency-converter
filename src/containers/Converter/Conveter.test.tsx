import { screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../../test-utils';
import getExchangeRate from '../../lib/api/getExchangeRate';
import { Converter } from '.';

jest.mock('../../lib/api/getExchangeRate');

const mockGetExchangeRate = getExchangeRate as jest.MockedFunction<typeof getExchangeRate>;

describe('Converter', () => {
  beforeEach(() => {
    mockGetExchangeRate.mockResolvedValue({ GBP: 1, USD: 4, EUR: 8 });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('converts currency correctly when fromCurrency remains GBP and toCurrency is selected', async () => {
    render(<Converter />);
    const fromInput = screen.getByRole('spinbutton');
    const toCurrencySelect = screen.getAllByRole('combobox')[1];

    userEvent.type(fromInput, '0');
    userEvent.selectOptions(toCurrencySelect, 'USD');

    expect(await screen.findByText('40.00 USD')).toBeInTheDocument();
  });

  it('converts currency correctly when fromCurrency and input amount is changed', async () => {
    render(<Converter />);
    const fromCurrencySelect = screen.getAllByRole('combobox')[0];
    const toCurrencySelect = screen.getAllByRole('combobox')[1];

    userEvent.selectOptions(toCurrencySelect, 'USD');
    userEvent.selectOptions(fromCurrencySelect, 'EUR');
    mockGetExchangeRate.mockResolvedValue({ EUR: 1, USD: 4, GBP: 8 });

    await waitFor(() => {
      expect(screen.getByText('4.00 USD')).toBeInTheDocument();
    });
  });

  it('handles same currency error', () => {
    render(<Converter />);
    const toCurrencySelect = screen.getAllByRole('combobox')[1];

    userEvent.selectOptions(toCurrencySelect, 'GBP');

    expect(screen.getByText('Please select different currency')).toBeInTheDocument();
  });

  it('clears history', () => {
    render(<Converter />);
    const clearHistoryButton = screen.getByText('Clear history');

    fireEvent.click(clearHistoryButton);

    expect(localStorage.getItem('history')).toBe('');
    expect(screen.queryByText('👉')).not.toBeInTheDocument();
  });
});
