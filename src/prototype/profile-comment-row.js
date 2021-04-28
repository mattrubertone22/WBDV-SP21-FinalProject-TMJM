import React, { Component, useState, useEffect } from "react";
import commentService from "../services/comment-service";

const CommentRowProfile = ({ comment, userId, teamId }) => {
  const [editingComment, setEditingComment] = useState({});
  const [content, setContent] = useState(comment);
  const [display, setDisplay] = useState(true);
  useEffect(()=>{
    console.log(content);
    console.log(userId);
  },[comment]);
  return (
    display && (
      <tr>
        <td>{comment.teamId}</td>
        <td>
          <textarea
            onChange={(e) =>
              setContent({ ...content, comment: e.target.value })
            }
            value={content.comment}
          ></textarea>
        </td>

          <i
            onClick={() => {
              setEditingComment(comment);
            }}
            className="fas fa-cog"
          ></i>


          <i
            onClick={() => {
              commentService.updateComment(comment.matchId, content).then(() => {
                setEditingComment({});
              });
            }}
            className="fas fa-check"
          ></i>


          <i
            onClick={() => {
              commentService
                .deleteComment(comment.matchId)
                .then(() => setDisplay(false));
            }}
            className="fas fa-trash"
          ></i>

      </tr>
    )
  );
};
export default CommentRowProfile;