import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  handleTryCloth = () => {
    const { type, imgSrc_png } = this.props.item;
    this.props.dispatch({
      type: "product/UPDATE_SELECTED_PRODUCT",
      payload: {
        type: type,
        image: imgSrc_png,
      },
    });
  };
  render() {
    const { imgSrc_jpg, name } = this.props.item;
    return (
      <div className="card p-2 mb-4">
        <img
          alt=""
          src={imgSrc_jpg}
          style={{ width: "300px", height: "400px" }}
        />
        <h3>{name}</h3>
        <button onClick={this.handleTryCloth} className="btn btn-info">
          Mặc thử
        </button>
      </div>
    );
  }
}

export default connect()(ProductItem);
