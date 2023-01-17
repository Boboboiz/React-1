import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
class ProductList extends Component {
  render() {
    return (
      <div className="row mt-3">
        {this.props.products.filter(item => item.type === this.props.selectedCategory).map((item) => {
          return (
            <div className="col-4" key={item.id}>
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    selectedCategory: state.categoryReducer.selectedCategory,
  };
};
export default connect(mapStateToProps)(ProductList);
