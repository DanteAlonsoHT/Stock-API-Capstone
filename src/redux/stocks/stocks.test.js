import axios from 'axios';
import { fetchData, STOCKS_API_URL } from './stocks.mock.test';

jest.mock('axios');

describe('Testing API axios', () => {
  test('fetches successfully data from an API', async () => {
    const data = {
      exchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      focus: true,
      name: 'SPDR S&P 500 ETF Trust',
      price: 445.87,
      stockId: 'cb4a2908-a319-466d-8094-500e55c7169c',
      symbol: 'SPY',
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData('react')).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      STOCKS_API_URL,
    );
  });

  test('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(fetchData('react')).rejects.toThrow(errorMessage);
  });
});
