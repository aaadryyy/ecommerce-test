import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

class Product extends React.Component {
  render() {
    const { id, title, img, price } = this.props.product;
    return (
      <Fragment>
        <Link to="/details">
          <ProductConsumer>
            {value => (
              <div className="container" onClick={() => value.handleDetail(id)}>
                <div className="row">
                  <h4>Product title</h4>
                </div>

                <img src={img} alt="" />

                <div>
                  {title} - {price}€
                </div>

                <hr />
              </div>
            )}
          </ProductConsumer>
        </Link>
      </Fragment>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired
};

export default Product;
