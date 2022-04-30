import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing'
import {Switch, Route} from 'react-router-dom';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ProductListing} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>404 Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
