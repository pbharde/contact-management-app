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
  let number = /^[0-9]+$/;
  let emailTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(emailTest.test(this.getEmail.value)==''){
       alert("Please enter a valid email");
     }
   else if(number.test(this.getPhone.value)==''){
    alert("Please enter only digits for Phone Number");
  }
  else if(this.getPhone.value.length>10){
     alert("Please enter only 10 digit phone number")
   }
   else{
     this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
   }

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
