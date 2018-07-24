import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newFname = this.getFname.value;
  const newLname = this.getLname.value;
  const newEmail = this.getEmail.value;
  const newPhone = this.getPhone.value;
  const data = {
    newFname,
    newLname,
    newEmail,
    newPhone
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getFname = input}
    defaultValue={this.props.post.fname} placeholder="Enter First Name" /><br /><br />
    <input required type="text" ref={(input) => this.getLname = input}
    defaultValue={this.props.post.lname} placeholder="Enter Last Name" /><br /><br />
    <input required type="text" ref={(input) => this.getEmail = input}
    defaultValue={this.props.post.email} placeholder="Enter Email" /><br /><br />
    <input required type="text" ref={(input) => this.getPhone = input}
    defaultValue={this.props.post.phone} placeholder="Enter Phone Number" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);
