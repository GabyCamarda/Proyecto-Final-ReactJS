import './App.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Products from './views/Products/Products';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import Carrito from './views/Carrito/Carrito';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/AreaContext/AreaContext';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (   
    
    <Router>
      <CartProvider> 
        <div className="App">
          <Header />
          <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/products" component={Products} />
              <Route path="/detail/:id" component={CharacterDetail} />
              <Route path="/cart" component={Carrito} />
            </Switch>
        </div>
        <Footer />
      </CartProvider>
    </Router> 

  );
}

export default App;