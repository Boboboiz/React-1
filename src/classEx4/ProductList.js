import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    return this.props.product.map((item) => {
      return (
        
          <div className="col-3">
            <ProductItem item ={item} key={item.id} setSelectedProduct={this.props.setSelectedProduct} />
          </div>
        
      );
    });
  };
  render() {
    return (
      <div className="row mt-2">
        {this.renderProduct()}
      </div>
    );
  }
}
