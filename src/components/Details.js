import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
class Details extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, info, price, title, img } = value.details;
          return (
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-4">
                  <img src={img} alt="dsf" />
                </div>
                <div className="col-8">
                  <div className="row d-flex justify-content-between mx-0">
                    <h1>
                      {title}
                      <br /> <small className="text-muted"> {company}</small>
                    </h1>
                    <h1>{price} €</h1>
                  </div>
                  <div>{info}</div>
                  <div>
                    <Link to="/">
                      <button>Back to products</button>
                    </Link>

                    <button onClick={() => value.addToCart(id)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
