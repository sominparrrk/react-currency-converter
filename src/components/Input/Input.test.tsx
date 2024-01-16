import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../test-utils';
import { Input } from './Input';

describe('Input component', () => {
  it('renders correctly with the correct initial value', () => {
    render(<Input value={1} />);
    const inputElement = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('1');
  });

  it('calls onChange handler when value changes', () => {
    const mockOnChange = jest.fn();
    render(<Input value={10} onChange={mockOnChange} />);
    const inputElement = screen.getByRole('spinbutton') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '100' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
