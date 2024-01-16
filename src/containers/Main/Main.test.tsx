import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import { Main } from '.';

jest.mock('../Converter', () => ({
  Converter: () => <div>mock-converter</div>,
}));

describe('Main', () => {
  it('renders Main', () => {
    render(<Main />);
    expect(screen.getByText('💷 Currency Converter 💵')).toBeInTheDocument();
    expect(screen.getByText('mock-converter')).toBeInTheDocument();
  });
});
