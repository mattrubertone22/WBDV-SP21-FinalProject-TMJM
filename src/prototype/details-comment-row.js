import React, { Component } from "react";
import { Link } from "react-router-dom";

class CommentRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.comment}</td>
      </tr>
    );
  }
}
export default CommentRow;