import React, { Component, useState } from "react";
import commentService from "../services/comment-service";

const CommentRowProfile = ({ comment, userId }) => {
  const [editingComment, setEditingComment] = useState({});
  const [content, setContent] = useState(comment);
  const [display, setDisplay] = useState(true);
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
        {!userId && editingComment._id !== comment._id && (
          <i
            onClick={() => {
              setEditingComment(comment);
            }}
            className="fas fa-cog"
          ></i>
        )}
        {!userId && editingComment._id === comment._id && (
          <i
            onClick={() => {
              commentService.updateComment(comment._id, content).then(() => {
                setEditingComment({});
              });
            }}
            className="fas fa-check"
          ></i>
        )}
        {!userId && editingComment._id === comment._id && (
          <i
            onClick={() => {
              commentService
                .deleteComment(comment._id)
                .then(() => setDisplay(false));
            }}
            className="fas fa-trash"
          ></i>
        )}
      </tr>
    )
  );
};
export default CommentRowProfile;
