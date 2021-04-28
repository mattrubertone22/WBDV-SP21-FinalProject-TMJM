import React, { Component } from "react";
import { Link } from "react-router-dom";

class MatchRow extends Component {
  render() {
    return (
           <tr>
               <td>

                       {this.props.matchId}

               </td>
               <td>
                   {this.props.note}
               </td>
           </tr>
           )
  }
}
export default MatchRow;