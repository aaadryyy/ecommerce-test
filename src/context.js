import React from "react";

import { storeProducts, detailProduct } from "./data";

// crée l'object Context qui nous fournit
// Provider => fournit l'information pour toute l'app
// Consumer => permet d'utiliser ces informations
const ProductContext = React.createContext();
class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      details: detailProduct
    };
  }

  componentDidMount = () => {
    this.setProducts();
  };

  setProducts = () => {
    let products = [];
    storeProducts.forEach(product => {
      const singleProduct = { ...product };
      products = [...products, singleProduct];
    });
    this.setState({ products });
  };

  handleDetail = () => {
    console.log("hello from details");
  };

  addToCart = () => {
    console.log("hello from add to cart");
  };
  render() {
    return (
      // on veut retourner le Provider (qui fournit donc les infos)
      // c'est pour ça qu'il doit être placé à la racine de de l'app
      // le point le plus haut possible
      // value permet d'utiliser les values de Provider
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {/* on retourne tous les children de l'app */}
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
