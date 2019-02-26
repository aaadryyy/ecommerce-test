import React, { Fragment } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
class ProductList extends React.Component {
  handleValue = value => {
    value.map(element => <div>{element}</div>);
  };

  render() {
    return (
      <Fragment>
        <Title text="Products" />
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
