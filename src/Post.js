import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
render() {
return (
<div className="post">
  <h2 className="post_fname">{this.props.post.fname}</h2>
  <h2 className="post_lname">{this.props.post.lname}</h2>
  <h2 className="post_email">{this.props.post.email}</h2>
  <h2 className="post_phone">{this.props.post.phone}</h2>
  <div className="control-buttons">
    <button className="edit"
    onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
    }
    >Edit</button>
    <button className="delete"
    onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
    >Delete</button>
  </div>
</div>
);
}
}
export default connect()(Post);
