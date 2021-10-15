/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// const API_KEY = '819c2b8705e5c67cf963a89ad94aa274';
// const STOCKS_API_URL = 'https://financialmodelingprep.com/api/v3/available-traded/list?apikey=' + API_KEY;

const initialState = {
  isFetching: false,
  data: [],
  error: {},
};

export const getStocks = createAsyncThunk(
  'redux/stocks/stocks.js',
  async () => {
    // const response = await axios.get(STOCKS_API_URL).catch((error) => error);
    const response = [{
      symbol: 'SPY',
      name: 'SPDR S&P 500 ETF Trust',
      price: 435.21,
      exchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      type: 'etf',
    }, {
      symbol: 'CMCSA',
      name: 'Comcast Corporation',
      price: 52.69,
      exchange: 'Nasdaq Global Select',
      exchangeShortName: 'NASDAQ',
      type: 'stock',
    }, {
      symbol: 'KMI',
      name: 'Kinder Morgan, Inc.',
      price: 17.97,
      exchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      type: 'stock',
    }, {
      symbol: 'INTC',
      name: 'Intel Corporation',
      price: 52.26,
      exchange: 'Nasdaq Global Select',
      exchangeShortName: 'NASDAQ',
      type: 'stock',
    }, {
      symbol: 'MU',
      name: 'Micron Technology, Inc.',
      price: 66.38,
      exchange: 'Nasdaq Global Select',
      exchangeShortName: 'NASDAQ',
      type: 'stock',
    }, {
      symbol: 'GDX',
      name: 'VanEck Vectors Gold Miners ETF',
      price: 32.19,
      exchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      type: 'etf',
    }, {
      symbol: 'GE',
      name: 'General Electric Company',
      price: 102.36,
      exchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      type: 'stock',
    }, {
      symbol: 'BAC',
      name: 'Bank of America Corporation',
      price: 43.14,
      exchange: 'New York Stock Exchange',
      exchangeShortName: 'NYSE',
      type: 'stock',
    }, {
      symbol: 'EEM',
      name: 'iShares MSCI Emerging Markets ETF',
      price: 51.16,
      exchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      type: 'etf',
    }, {
      symbol: 'XLF',
      name: 'Financial Select Sector SPDR Fund',
      price: 38.27,
      exchange: 'New York Stock Exchange Arca',
      exchangeShortName: 'AMEX',
      type: 'etf',
    }, {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: 140.91,
      exchange: 'Nasdaq Global Select',
      exchangeShortName: 'NASDAQ',
      type: 'stock',
    }, {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      price: 296.31,
      exchange: 'Nasdaq Global Select',
      exchangeShortName: 'NASDAQ',
      type: 'stock',
    }];
    const data = [];

    response.forEach((obj) => {
      const {
        symbol, name, price, exchange, exchangeShortName,
      } = obj;

      const formatedData = {
        stockId: uuidv4(),
        symbol,
        name,
        price,
        exchange,
        exchangeShortName,
        focus: false,
      };

      data.push(formatedData);
    });

    return data;
  },
);

const stocksSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getStock: (state, action) => {
      const stocks = { ...state };
      stocks.data = stocks.data.map((stocks) => {
        if (stocks.stockId === action.payload) {
          return { ...stocks, focus: (stocks.focus === false ? !stocks.focus : stocks.focus) };
        }
        return { ...stocks, focus: false };
      });
      return stocks;
    },
  },
  extraReducers: {
    [getStocks.pending.type]: (state) => ({ ...state, isFetching: true }),
    [getStocks.fulfilled.type]: (state, action) => (
      {
        ...state, isFetching: false, data: action.payload, error: {},
      }),
    [getStocks.rejected.type]: (state) => ({ ...state, isFetching: false, error: {} }),
  },
});

export const { getStock } = stocksSlice.actions;
export default stocksSlice.reducer;
