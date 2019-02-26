import React from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      detailProducts: detailProduct
    };
  }

  componentDidMount = () => {
    this.setProducts();
  };
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = [...item];
      const products = [...products, singleItem];
    });
    this.setState({ products });
  };

  handleDetail = () => {
    console.log("hello from details");
  };

  addToCart = () => {
    console.log("Hello from add to cart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
