import React, { Component } from "react";
import "./Model.css";
import { connect } from "react-redux";




class Model extends Component {
  
  render() {
    return (
      <div
        className="contain"
      >
        <div
          className="body"
          style={{
            backgroundImage: "url(images/allbody/bodynew.png)",
          }}
        />
        <div
          className="model"
          style={{
            backgroundImage: "url(images/model/1000new.png)",
          }}
        />
        <div
          className="bikinitop"
          style={{
            backgroundImage: "url(images/allbody/bikini_branew.png)",
          }}
        />

        <div
          className="bikinibottom"
          style={{
            backgroundImage: "url(images/allbody/bikini_pantsnew.png)",
          }}
        />

        <div
          className="feetleft"
          style={{
            backgroundImage: "url(images/allbody/feet_high_leftnew.png)",
          }}
        />
        <div
          className="feetright"
          style={{
            backgroundImage: "url(images/allbody/feet_high_rightnew.png)",
          }}
        />
        {/* Áo */}
        <div className="bikinitop" style={{
          backgroundImage:`url(${this.props.selectedProduct.topclothes})`,
          backgroundSize:"cover"
        }}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.productReducer.selectedProduct,
  }
}
export default connect(mapStateToProps)(Model);
