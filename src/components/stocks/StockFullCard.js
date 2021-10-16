import { useSelector } from 'react-redux';
import StockCardStyle from './StockCard.module.css';
import StockFullCardStyle from './StockFullCard.module.css';

const StockFullCard = () => {
  const allStocks = useSelector((state) => state.stocks);
  const { data } = allStocks;
  const fullStock = data.filter((stocks) => stocks.focus);

  return (
    <>
      {
        fullStock.map((stock) => (
          <div key="full-description" className={StockFullCardStyle.fullDescriptionContent}>
            <div className={StockCardStyle.stockCard}>
              <h3 className={StockCardStyle.stockSymbol}>{stock.symbol}</h3>
              <h4 className={StockCardStyle.stockName}>{stock.name}</h4>
              <p className={StockCardStyle.stockPrice}>
                $
                {stock.price}
              </p>
            </div>
            <ul className={StockFullCardStyle.exchangeContent}>
              <li>
                <strong>Exchange:</strong>
              </li>
              <li>{stock.exchange}</li>
              <li>
                {stock.exchangeShortName}
                {' '}
              </li>
            </ul>
          </div>
        ))
      }
    </>
  );
};

export default StockFullCard;
