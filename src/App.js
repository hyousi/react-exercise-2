import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Container from './components/Container';

const URL = 'http://localhost:3000/products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selected: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let categories = new Set();
        data.forEach((item) =>
          categories.has(item.category) ? false : categories.add(item.category)
        );
        categories = [...categories];
        let products = {};
        categories.forEach((category) => (products[category] = []));
        data.forEach((item) => {
          const { category, ...product } = item;
          console.log(products[category]);
          products[category].push(product);
        });
        this.setState({ products });
      });
  }

  handleClick() {
    this.setState({ selected: this.state.selected + 1 });
  }

  render() {
    const { products, selected } = this.state;
    return (
      <main className="app">
        <Header selected={selected} />
        <Container products={products} handleClick={this.handleClick} />
      </main>
    );
  }
}

export default App;
