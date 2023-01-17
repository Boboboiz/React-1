import React, { Component } from "react";
import { connect } from "react-redux";
 class UserList extends Component {
  render() {
    return (
      <div className="card mt-3">
        <div className="card-header bg-dark">
          <h4 className="text-light">Danh sách</h4>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ Tên</th>
                <th>Tài khoản</th>
                <th>SĐT</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
                {this.props.users.map((item,index)=> {
                    return (
                        <tr>
                        <td>{index + 1}</td>
                        <td>{item.fullName}</td>
                        <td>{item.username}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                      </tr>
                    )
                })}
             
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.userReducer.users };
};

export default connect (mapStateToProps)(UserList)