import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CommentRowDetail extends Component {
    render() {
        return (
           <tr>
               <td>
                   <Link style={{color: 'blue'}} to={`/profile/${this.props.userName}`}>
                       {this.props.userName}
                   </Link>
               </td>
               <td>
                   {this.props.comment}
               </td>
           </tr>



        );
    }
}
export default CommentRowDetail;