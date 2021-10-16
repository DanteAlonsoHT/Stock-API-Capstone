import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import store from '../../redux/configureStore';
import StockFullCard from './StockFullCard';
import StockCardStyle from './StockCard.module.css';
import StockFullCardStyle from './StockFullCard.module.css';

const stockId = '1';
const symbolStock = 'SPY';
const nameStock = 'SPDR S&P 500 ETF Trust';
const priceStock = '444.8';
const exchangeStock = 'New York Stock Exchange Arca';
const exchangeShortNameStock = 'AMEX';

const createComponent = create(
  <div key="full-description" id={stockId} className={StockFullCardStyle.fullDescriptionContent}>
    <div className={StockCardStyle.stockCard}>
      <h3 className={StockCardStyle.stockSymbol}>{symbolStock}</h3>
      <h4 className={StockCardStyle.stockName}>{nameStock}</h4>
      <p className={StockCardStyle.stockPrice}>
        $
        {priceStock}
      </p>
    </div>
    <ul className={StockFullCardStyle.exchangeContent}>
      <li>
        <strong>Exchange:</strong>
      </li>
      <li>{exchangeStock}</li>
      <li>
        {exchangeShortNameStock}
        {' '}
      </li>
    </ul>
  </div>,
);

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Router>
        <Switch>
          <StockFullCard />
        </Switch>
      </Router>
    </Provider>,
  );
};

describe('Testing StockFullCard component', () => {
  test('render the StockFullCard successfully', () => {
    renderComponent();
    expect(screen.queryAllByText('*')).toStrictEqual([]);
  });

  test('it has a div as the type of component', () => {
    const component = createComponent.toJSON();
    expect(component.type).toStrictEqual('div');
  });

  test('it has props as an object', () => {
    const component = createComponent.toJSON();
    expect(typeof JSON.parse(JSON.stringify(component.props))).toStrictEqual('object');
  });

  test('it has two props', () => {
    const component = createComponent.toJSON();
    expect(Object.keys(JSON.parse(JSON.stringify(component.props))).length).toStrictEqual(2);
  });

  test('it has id as a prop', () => {
    const component = createComponent.toJSON();
    expect(component.props.id).toStrictEqual(stockId);
  });

  test('it has className as a prop', () => {
    const component = createComponent.toJSON();
    expect(component.props.className).toStrictEqual('fullDescriptionContent');
  });

  test('it has className as a prop', () => {
    const component = createComponent.toJSON();
    expect(component.props.className).toStrictEqual('fullDescriptionContent');
  });

  test('it has two children', () => {
    const component = createComponent.toJSON();
    expect(component.children.length).toStrictEqual(2);
  });

  test('its first child is a div', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].type).toStrictEqual('div');
  });

  test('its second child is a ul', () => {
    const component = createComponent.toJSON();
    expect(component.children[1].type).toStrictEqual('ul');
  });

  test('its first child has only one property', () => {
    const component = createComponent.toJSON();
    expect(
      Object.keys(JSON.parse(JSON.stringify(component.children[0].props))).length,
    ).toStrictEqual(1);
  });

  test('its first child has only className as property', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].props.className).toStrictEqual('stockCard');
  });

  test('its second child has only one property', () => {
    const component = createComponent.toJSON();
    expect(
      Object.keys(JSON.parse(JSON.stringify(component.children[1].props))).length,
    ).toStrictEqual(1);
  });

  test('its second child has only className as property', () => {
    const component = createComponent.toJSON();
    expect(component.children[1].props.className).toStrictEqual('exchangeContent');
  });

  test('its first child has three children', () => {
    const component = createComponent.toJSON();
    expect(component.children[0].children.length).toStrictEqual(3);
  });

  test('its second child has three children as well', () => {
    const component = createComponent.toJSON();
    expect(component.children[1].children.length).toStrictEqual(3);
  });
});
