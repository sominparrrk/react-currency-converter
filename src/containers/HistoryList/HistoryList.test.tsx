import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import { HistoryList } from '.';

describe('HistoryList', () => {
  const historyItems = ['1 GBP to USD', '2 GBP to USD', '3 GBP to USD'];

  it('renders correctly with history items', () => {
    render(<HistoryList history={historyItems} />);
    historyItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders the correct number of items', () => {
    render(<HistoryList history={historyItems} />);
    const listItems = screen.getAllByText(/GBP to USD/);
    expect(listItems).toHaveLength(historyItems.length);
  });
});
