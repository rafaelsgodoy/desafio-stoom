import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import theme from './theme';
import './App.css';

let persistor = persistStore(store);

const App = () => {
  return (<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Route exact path='/' component={Home} />
        <Route path='/cart' component={Cart} />
      </ThemeProvider>
    </PersistGate>
  </Provider >);
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.querySelector('#root'));