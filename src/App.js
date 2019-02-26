<<<<<<< Updated upstream
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
=======
import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> Stashed changes

class App extends Component {
  render() {
    return (
<<<<<<< Updated upstream
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
=======
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </Fragment>
>>>>>>> Stashed changes
    );
  }
}

export default App;
