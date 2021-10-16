import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_KEY = '819c2b8705e5c67cf963a89ad94aa274';
const STOCKS_API_URL = `https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${API_KEY}`;

const initialState = {
  isFetching: false,
  data: [],
  error: {},
};

export const getStocks = createAsyncThunk(
  'redux/stocks/stocks.js',
  async () => {
    const response = await axios.get(STOCKS_API_URL).catch((error) => error);
    const data = [];

    for (let i = 0; i < 51; i += 1) {
      const {
        symbol, name, price, exchange, exchangeShortName,
      } = response.data[i];

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
    }

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
