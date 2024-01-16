import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../../types/currency';

describe('CurrencySelect component', () => {
  const mockOptions: Currency[] = [
    { code: 'GBP', name: 'Pound Sterling', country: 'United Kingdom' },
    { code: 'USD', name: 'United States Dollar', country: 'United States' },
    { code: 'EUR', name: 'Euro', country: 'European Union' },
  ];

  it('renders with placeholder', () => {
    render(<CurrencySelect options={mockOptions} value='' placeholder='Select the currency' />);
    expect(screen.getByText('Select the currency')).toBeInTheDocument();
  });

  it('renders with value if there is a value', () => {
    const { container } = render(<CurrencySelect options={mockOptions} value='EUR' />);
    expect(container.querySelector('option:checked')).toHaveValue('EUR');
  });

  it('renders options correctly', () => {
    render(<CurrencySelect options={mockOptions} value='' />);
    mockOptions.forEach((option) => {
      expect(screen.getByText(`${option.code} - ${option.name}`)).toBeInTheDocument();
    });
  });

  it('calls onChange when option is selected', () => {
    const mockOnChange = jest.fn();
    render(<CurrencySelect options={mockOptions} value='' onChange={mockOnChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'USD' } });
    expect(mockOnChange).toHaveBeenCalled();
  });
});
