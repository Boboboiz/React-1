import React, { Component } from "react";

class UserForm extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark">
          <h4 className="text-light">Form đăng ký</h4>
        </div>
        <div className="card-body">
          <form>
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Tài khoản"
            />
            <input
              className="form-control  mb-3"
              type="text"
              placeholder="Họ tên"
            />
            <input
              className="form-control  mb-3"
              type="text"
              placeholder="Mật khẩu"
            />
            <input
              className="form-control  mb-3"
              type="text"
              placeholder="Số ĐT"
            />
            <input
              className="form-control  mb-3"
              type="text"
              placeholder="Email"
            />
            <input
              className="form-control  mb-3"
              type="text"
              placeholder="Mã loại người dùng"
            />
            <button className="btn btn-info mt-3">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default UserForm;
