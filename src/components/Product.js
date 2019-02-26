import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Product extends React.Component {
  render() {
    const { title, img, price } = this.props.product;
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <h4>Product title</h4>
            <Link to="/details">Detail</Link>
          </div>
          <div onClick={() => console.log("You clicked on the image!")}>
            <img src={img} alt="" />
          </div>
          <div>
            {title} - {price}€
          </div>
          <button onClick={() => console.log("You clicked the button")}>
            Add to cart
          </button>

          <hr />
        </div>
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
