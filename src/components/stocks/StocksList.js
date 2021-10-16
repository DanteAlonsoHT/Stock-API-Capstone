import { useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import StockCard from './StockCard';
import StocksListStyle from './StocksList.module.css';

const StocksList = () => {
  const allStocks = useSelector((state) => state.stocks);
  let { data } = allStocks;

  const [exchangeSelected, setExchangeSelected] = useState('none');

  const filterByExchange = (event) => {
    setExchangeSelected(event.target.value);
    data = data.filter((data) => data.exchangeShortName === exchangeSelected);
  };

  const getAllAgain = () => {
    setExchangeSelected('none');
    data = allStocks.data;
  };

  let status = true;
  let ligth = 0;
  let dark = 0;
  let bgValue = '';

  const defBgControlValue = () => {
    if (status) {
      ligth += 1;
      bgValue = 'bgLigth';
      if (ligth === 2) {
        status = false;
        ligth = 0;
      }
    } else {
      dark += 1;
      bgValue = 'bgDark';
      if (dark === 2) {
        status = true;
        dark = 0;
      }
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      key={uuidv4()}
    >
      <div className={StocksListStyle.stockFiltersContent}>
        <button type="button" onClick={getAllAgain}>CHECK ALL</button>
        <select name="exchange" onChange={filterByExchange}>
          <option value="none">{exchangeSelected !== 'none' ? exchangeSelected : '-----' }</option>
          <option value="NASDAQ">NASDAQ</option>
          <option value="NYSE">NYSE</option>
          <option value="AMEX">AMEX</option>
        </select>
      </div>
      <div className={StocksListStyle.stocksListContent}>
        {
          data.filter((stocks) => (exchangeSelected !== 'none' ? stocks.exchangeShortName === exchangeSelected : stocks)).map((stock, index) => (
            <StockCard
              key={uuidv4()}
              stockId={stock.stockId}
              symbol={stock.symbol}
              name={stock.name}
              price={stock.price}
              stockCard={defBgControlValue() ? bgValue : bgValue}
              title={index === 0 ? 'ALL STOCKS' : ''}
            />
          ))
        }
      </div>
    </div>
  );
};

export default StocksList;
