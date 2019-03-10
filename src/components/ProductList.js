import React, { Fragment } from "react";
import Title from "./Title";
import Product from "./Product";
import { ProductConsumer } from "../context";
import { storeProducts } from "../data";
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: storeProducts
    };
  }
  render() {
    return (
      <Fragment>
        <Title text="Products" />

        {/* permet d'utiliser la data du context */}
        <ProductConsumer>
          {value => {
            return value.products.map(product => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </Fragment>
    );
  }
}

export default ProductList;
