import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default  from './components/Default';
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-6"><h2>The Quick</h2>
      //     <h3>The Quick</h3>
      //     </div>
      //     <div className="col-6">
      //     <h1>The Quick</h1>
      //       <span><i className="fas fa-home" /></span></div>
      //   </div>
      // </div>
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal /> 
        {/* <ProductList></ProductList>
        <Details></Details>
        <Cart></Cart>
        <Default></Default> */}
      </React.Fragment>
    );
  }
}

export default App;
