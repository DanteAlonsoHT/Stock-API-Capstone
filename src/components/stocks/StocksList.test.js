import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import StocksList from './StocksList'

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Router>
        <Switch>
          <StocksList />
        </Switch >
      </Router>
    </Provider>
  );
};

describe('Testing StocksList component', () => {
  test('render the StocksList successfully (without Hi text)', () => {
    renderComponent();
    expect(screen.queryAllByText("Hi")).toStrictEqual([]);
  });

  test('StocksList has 2 buttons', () => {
    renderComponent();
    expect(screen.getAllByRole('button').length).toBe(2);
  });

  test('StocksList has 4 options to select', () => {
    renderComponent();
    expect(screen.getAllByRole('option').length).toBe(4);
  });

  test('StocksList has a button with CHECK ALL text', () => {
    renderComponent();
    expect(screen.getAllByRole('button')[0]).toHaveTextContent('CHECK ALL');
  });

  test('StocksList has an option with ----- text', () => {
    renderComponent();
    expect(screen.getAllByRole('option')[0]).toHaveTextContent('-----');
  });

  test('StocksList has an option with NASDAQ text', () => {
    renderComponent();
    expect(screen.getAllByRole('option')[1]).toHaveTextContent('NASDAQ');
  });

  test('StocksList has an option with NYSE text', () => {
    renderComponent();
    expect(screen.getAllByRole('option')[2]).toHaveTextContent('NYSE');
  });

  test('StocksList has an option with AMEX text', () => {
    renderComponent();
    expect(screen.getAllByRole('option')[3]).toHaveTextContent('AMEX');
  });
});
