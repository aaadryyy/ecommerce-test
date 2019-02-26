import React from "react";
import { ProductConsumer } from "../context";
// import { Link } from "react-router-dom";
class Details extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value.detailProduct);
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
