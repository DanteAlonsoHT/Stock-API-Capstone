import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import StockCard from './StockCard';

const goodProps = () => {
  const stockId = '1';
  const symbolStock = 'SPY';
  const nameStock = 'SPDR S&P 500 ETF Trust';
  const priceStock = '444.8';
  const stockCardStock = 'bg-light';
  const index = 0;
  return ([stockId, symbolStock, nameStock, priceStock, stockCardStock, index]);
};

const renderComponent = (props) => {
  const [id, symbol, name, price, bgValue, index] = props;
  render(
    <Router>
      <Switch>
        <StockCard
          key={uuidv4()}
          stockId={id}
          symbol={symbol}
          name={name}
          price={price}
          stockCard={bgValue}
          title={index === 0 ? 'ALL STOCKS' : ''}
        />
      </Switch>
    </Router>,
  );
};

describe('Testing StockCard component', () => {
  test('render the StockCard with good properties successfully', () => {
    renderComponent(goodProps());
    expect(screen.getByText(goodProps()[1])).toBeInTheDocument();
  });

  test('the id is not present in the screen', () => {
    renderComponent(goodProps());
    expect(screen.queryByText(goodProps()[0])).not.toBeInTheDocument();
  });

  test('the symbol is present in the screen', () => {
    renderComponent(goodProps());
    expect(screen.queryByText(goodProps()[1])).toBeInTheDocument();
  });

  test('the price is present in the screen', () => {
    renderComponent(goodProps());
    expect(screen.queryByText(goodProps()[2])).toBeInTheDocument();
  });

  test('the index value is a prop', () => {
    expect((goodProps()[5])).toBe(0);
  });

  test('when index value is 0 a title appears', () => {
    renderComponent(goodProps());
    expect(screen.queryByText('ALL STOCKS')).toBeInTheDocument();
  });

  test('button is present in the screen', () => {
    renderComponent(goodProps());
    expect(screen.getByRole('button')).toHaveTextContent('');
  });

  test('link is present in the screen', () => {
    renderComponent(goodProps());
    expect(screen.getByRole('link')).toHaveTextContent('');
  });
});
