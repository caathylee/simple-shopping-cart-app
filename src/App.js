import React, { Component } from 'react';
import Header from './components/Header';
import ProductsPage from './components/ProductsPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.shoppingCartData = {};
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
  }

  handleAddItemToCart(product) {
    this.shoppingCartData.cartItems.add(product);
    this.setState({
      shoppingCartData: this.shoppingCartData
    });
  }

  render() {
    return (
      <div className="App">
        <ProductsPage shoppingCartData = {this.shoppingCartData} handleAddItemToCart = {this.handleAddItemToCart}/>
        <Header shoppingCartData = {this.shoppingCartData}/>
      </div>
    );
  }
}

export default App;
