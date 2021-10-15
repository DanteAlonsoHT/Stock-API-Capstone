import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useEffect } from 'react';
import NotMatch from './pages/NotMatch';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { getStocks } from './redux/stocks/stocks';
import store from './redux/configureStore';
import './App.css';
import StockDetails from './pages/StockDetails';

const App = () => {
  useEffect(() => {
    store.dispatch(getStocks());
  }, []);

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/stock-details">
          <StockDetails />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
