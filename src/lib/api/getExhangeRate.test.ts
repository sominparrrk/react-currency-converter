import getExchangeRate from './getExchangeRate';
import { ExchangeRateApiResponse } from './types/exchangeRate';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

const mockCurrency = 'GBP';
const mockResponse: ExchangeRateApiResponse = {
  result: 'success',
  provider: 'https://www.exchangerate-api.com',
  documentation: 'https://www.exchangerate-api.com/docs/free',
  terms_of_use: 'https://www.exchangerate-api.com/terms',
  time_last_update_unix: 1705363351,
  time_last_update_utc: 'Tue, 16 Jan 2024 00:02:31 +0000',
  time_next_update_unix: 1705451341,
  time_next_update_utc: 'Wed, 17 Jan 2024 00:29:01 +0000',
  time_eol_unix: 0,
  base_code: 'USD',
  rates: {
    USD: 1,
    AUD: 1.4817,
    BGN: 1.7741,
    CAD: 1.3168,
    CHF: 0.9774,
    CNY: 6.9454,
    EGP: 15.7361,
    EUR: 0.9013,
    GBP: 0.7679,
  },
};

describe('getExchangeRate', () => {
  it('calls exchange rate API', async () => {
    const axios = require('axios').default;
    axios.get.mockResolvedValue({ data: mockResponse });

    const expectedUrl = `https://open.er-api.com/v6/latest/${mockCurrency}`;
    await getExchangeRate(mockCurrency);

    expect(axios.get).toBeCalledWith(expectedUrl);
  });

  it('throws an error when the API call fails', async () => {
    const axios = require('axios').default;
    axios.get.mockResolvedValue(new Error('Network error'));

    await expect(getExchangeRate(mockCurrency)).rejects.toThrow('Error fetching exchange rates');
  });
});
