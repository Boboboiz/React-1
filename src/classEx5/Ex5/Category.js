import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from "clsx";
class Category extends Component {
  handleChange = (typeOfCategory) => { //type của category được chọn
    console.log(typeOfCategory);
    this.props.dispatch({
      type: "category/SET_SELECTED_CATEGORY",
      payload: typeOfCategory
    })
  }
  render() {
    return (
      <div className="btn-group d-flex justify-content-center">
        {this.props.categories.map(item => {
          return <button onClick={()=> {
            this.handleChange(item.type)
          }} key={item.type} className={clsx('btn','btn-secondary',{
            'btn-dark':item.type === this.props.selectedCategory
          })}>{item.showName}</button>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    categories : state.categoryReducer.categories,
    selectedCategory: state.categoryReducer.selectedCategory
  } 
}
export default connect(mapStateToProps)(Category);
