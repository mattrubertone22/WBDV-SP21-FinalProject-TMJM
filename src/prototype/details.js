import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import teamService from "../services/team-service";
import commentService from "../services/comment-service";

import ReactDOM from "react-dom";
import userService from "../services/user-service";
import { Heading, VStack, Input } from "@chakra-ui/react";
import Commentdetail from "./details-comment-row";

const Details = () => {
  const { teamId } = useParams();
  const history = useHistory();
  const [team, setTeam] = useState({});
  const [newComment, setNewComment] = useState({
    teamId: teamId,
    uid: "",
    comment: "",
  });
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    teamService.getTeamById(teamId).then((team) => setTeam(team));
    commentService
      .findCommentsByTeamId(teamId)
      .then((comments) => setComments(comments));
    userService.profile().then((currentUser) => {
      setCurrentUser(currentUser);
      console.log("inside function", currentUser);
      setNewComment({ ...newComment, uid: currentUser.id });
    });
    console.log(newComment);
  }, [teamId]);

  const createNewComment = () => {
    console.log("Printing Comment", newComment);
    commentService.createComment(newComment).then((newComment) => {
      setNewComment(newComment);
      setComments(newComment);
    });
  };

  return (
    <div>
      <VStack>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </button>
        <Heading fontSize="70px" color="darkblue" fontStyle="italic">
          Team Details
        </Heading>

        <h2>{team.name}</h2>
        <img src={team.logo_url} width="200" height="200" />
        <table id="team_data_table">
          <tr>
            <td>rating</td>
            <td>{team.rating}</td>
          </tr>
          <tr>
            <td>winning</td>
            <td>{team.wins}</td>
          </tr>
          <tr>
            <td>lost</td>
            <td>{team.losses}</td>
          </tr>
        </table>
        <div className="table-responsive">
          <table className="table text-nowrap">
            <thead>
              <tr>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <Commentdetail {...comment} />
              ))}
            </tbody>
          </table>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="comment">Experience against this team</label>
            <input
              type="text"
              className="form-control"
              id="comment"
              placeholder="Comment"
              onChange={(e) => {
                setNewComment({ ...newComment, comment: e.target.value });
              }}
              value={newComment.comment}
            />
            <br />

            <button
              onClick={() => createNewComment()}
              type="button"
              className="btn btn-primary"
            >
              submit
            </button>
          </div>
        </form>
      </VStack>
    </div>
  );
};

export default Details;
