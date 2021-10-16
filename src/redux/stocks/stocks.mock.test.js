import axios from 'axios';

const API_KEY = '819c2b8705e5c67cf963a89ad94aa274';
export const STOCKS_API_URL = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${API_KEY}`;

export const fetchData = async () => {
  const url = STOCKS_API_URL;
  const getURL = await axios.get(url);
  return getURL;
};

fetchData('react');

describe('Testing API axios', () => {
  test('URL is the correct', () => {
    const url = 'https://financialmodelingprep.com/api/v3/available-traded/list?apikey=819c2b8705e5c67cf963a89ad94aa274';
    expect(url).toStrictEqual(STOCKS_API_URL);
  });
});
