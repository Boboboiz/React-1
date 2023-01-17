import React, { Component } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";
import { connect } from "react-redux";
class Home extends Component {
  fetchUser = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users",
      });
      console.log(res.data);
      this.props.dispatch({
        type: "user/UPDATE_USER_LIST",
        payload: res.data
      })
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <h1>Quản lý người dùng</h1>
        <UserForm />
        <UserList />
      </div>
    );
  }
  componentDidMount (){
    this.fetchUser()
  } // chạy 1 lần duy nhất khi khởi tạo component lên giao diện
}

export default connect()(Home);
