import React from "react";

import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        Navbar
        <Link to="/">Accueil</Link>
        <Link to="/details">Details</Link>
        <Link to="/cart">Cart</Link>
      </div>
    );
  }
}

export default Navbar;
