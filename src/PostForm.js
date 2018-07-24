import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
const fname = this.getFname.value;
const lname = this.getLname.value;
const email = this.getEmail.value;
const phone = this.getPhone.value;
 const data = {
  id: new Date(),
  fname,
  lname,
  email,
  phone,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getFname.value = '';
 this.getLname.value = '';
 this.getEmail.value = '';
 this.getPhone.value = '';
}
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Add Contact</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getFname = input}
   placeholder="Enter First Name" /><br /><br />
   <input required type="text" ref={(input) => this.getLname = input}
   placeholder="Enter Last Name" /><br /><br />
   <input required type="text" ref={(input) => this.getEmail = input}
   placeholder="Enter Email" /><br /><br />
   <input required type="text" ref={(input) => this.getPhone = input}
   placeholder="Enter Phone Number" /><br /><br />
   <button>Add</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);
