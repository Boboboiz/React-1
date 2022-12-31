import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.product.map((item) => {
      return (
        <div className="row mt-2">
          <div className="col-3">
            <ProductItem item ={item}/>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        {renderProduct()}
      </div>
    );
  }
}
