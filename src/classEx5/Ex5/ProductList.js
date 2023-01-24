import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-4">
          <ProductItem />
        </div>
        <div className="col-4">
          <ProductItem />
        </div>
      </div>
    );
  }
}

export default ProductList;
