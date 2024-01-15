import axios from 'axios';
import { ExchangeRateApiResponse } from './types/exchangeRate';

async function getExchangeRate(fromCurrency: string): Promise<ExchangeRateApiResponse['rates']> {
    try {
        const response = await axios.get<ExchangeRateApiResponse>(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        return response.data.rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw new Error('Error fetching exchange rates');
    }
}

export default getExchangeRate;
