
const COMMENTS_URL = "http://localhost:8080/api/comments";
const NOTE_URL = "http://localhost:8080/api/note";

export const createComment = (commentObj) =>
  fetch(`${COMMENTS_URL}/team/${commentObj.uid}/comments`, {
    method: "POST",
    body: JSON.stringify(commentObj),
    headers: {
      "content-type": "application/json",
    },
  }).then((response) => response.json());


export const createNote = (match) => {
   return fetch(`${NOTE_URL}/user/${match.uid}/note`, {
         method: "POST",
         credentials: "include",
         body: JSON.stringify(match),
        headers: {
             "content-type": "application/json",
           },
         }).then((response) => response.json());
 };





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

export const findCommentsByUserId = (uid) =>
  fetch(`${COMMENTS_URL}/users/${uid}/comments`).then((response) =>
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
  findCommentsByUserId,
  findCommentsByTeamId,
  findCommentsById,
  createNote,
};