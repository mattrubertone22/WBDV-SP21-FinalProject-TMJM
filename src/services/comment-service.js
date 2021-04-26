const COMMENTS_URL = "http://localhost:8080/api/comments";
export const createComment = (commentObj) =>
  fetch(`${COMMENTS_URL}/team/${commentObj.uid}/comments`, {
    method: "POST",
    body: JSON.stringify(commentObj),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

export const deleteComment = (commentId) =>
  fetch(`${COMMENTS_URL}/comments/${commentId}`, {
    method: "DELETE",
  }).then((response) => response.json());

export const updateComment = (commentId, comment) =>
  fetch(`${COMMENTS_URL}/comments/${commentId}`, {
    method: "PUT",
    body: JSON.stringify(comment),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());

export const findCommentsByUserName = (userName) =>
  fetch(`${COMMENTS_URL}/users/${userName}/comments`).then((response) =>
    response.json()
  );

export const findCommentsByTeamId = (teamId) =>
  fetch(`${COMMENTS_URL}/teams/${teamId}/comments`).then((response) =>
    response.json()
  );

export const findCommentsById = (commentId) =>
  fetch(`${COMMENTS_URL}/comments/${commentId}`).then((response) =>
    response.json()
  );

export default {
  createComment,
  deleteComment,
  updateComment,
  findCommentsByUserName,
  findCommentsByTeamId,
  findCommentsById,
};
