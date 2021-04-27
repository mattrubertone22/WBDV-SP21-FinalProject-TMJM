import React, { useEffect, useState } from "react";
import CommentProfile from "./profile-comment-row";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Text,
  Heading,
  VStack,
  Select,
  useToast,
} from "@chakra-ui/react";
import userService from "../services/user-service";
import commentService from "../services/comment-service";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [statusCode, setStatusCode] = useState("");
  const [comments, setComments] = useState([]);
  const { userName } = useParams();
  const [otherUser, setOtherUser] = useState({});
  const toast = useToast();
  useEffect(() => {
    if (userName) {
    console.log("111")
      userService.otherProfile(userName).then((otherUser) => {
        setOtherUser(otherUser);
        commentService.findCommentsByUserId(otherUser.id).then((comments) => {
          console.log(comments);
          setComments(comments);
        });
      });
    } else {
      userService.profile().then((current) => {
        setCurrentUser(current);

        commentService.findCommentsByUserId(current.id).then((comments) => {
          setComments(comments);
        });
      });
    }
  }, [statusCode]);
  const updateprofile = (currentUser) => {
    if (!(currentUser.userName && currentUser.password)) {
      toast({
        title: "Update profile failed",
        description: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (currentUser.password.length < 3) {
      toast({
        title: "Sign up failed",
        description: "Password at least 3 digits",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    console.log("currentuser inside of updateprofile:", currentUser);
    userService
      .updateProfile(currentUser)

      .then((currentUser) => {
        setCurrentUser(currentUser);
        toast({
          title: "Updated profile",
          description: "Profile successfully updated!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <div>
      <VStack>
        <Heading fontSize="70px" color="darkblue" fontStyle="italic">
          {currentUser.userName} Profile
        </Heading>
        <Box p="4" borderRadius="lg" width="lg">
          {userName && (
            <>
              <FormControl mb="1rem">
                <FormLabel fontSize="20px">Username</FormLabel>
                <Input type="text" value={otherUser.userName} />
              </FormControl>

              <FormControl mb="1rem">
                <FormLabel fontSize="20px">I am a team manager/coach</FormLabel>
                <Select value={otherUser.role}>
                  <option>Yes</option>
                  <option>No</option>
                </Select>
              </FormControl>
            </>
          )}

          {!editing && currentUser.userName && (
            <Stack direction="column" spacing={7} align="center" pt="2rem">
              <Button
                onClick={() => {
                  setEditing(true);
                  console.log("editing in edit profile", editing);
                }}
                colorScheme="purple"
                size="lg"
                width="xs"
              >
                Edit Profile
              </Button>
            </Stack>
          )}

          {editing && !userName && (
            <>
              <FormControl mb="1rem">
                <FormLabel fontSize="20px">Username</FormLabel>
                <Input
                  type="text"
                  value={currentUser.userName}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, userName: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mb="1rem">
                <FormLabel fontSize="20px">Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, password: e.target.value })
                  }
                  value={currentUser.password}
                />
              </FormControl>

              <FormControl mb="1rem">
                <FormLabel fontSize="20px">I am a team manager/coach</FormLabel>
                <Select
                  onChange={(e) => {
                    setCurrentUser((currentUser) => ({
                      ...currentUser,
                      role: e.target.options[e.target.selectedIndex].value,
                    }));
                    console.log(e.target.options[e.target.selectedIndex].value);
                  }}
                  value={currentUser.role}
                >
                  <option value={"Yes"}>Yes</option>
                  <option value={"No"}>No</option>
                </Select>
              </FormControl>
              <Stack direction="column" spacing={7} align="center" pt="2rem">
                <Button
                  onClick={() => {
                    updateprofile(currentUser);
                    setEditing(false);
                    console.log("editing in update profile", editing);
                  }}
                  colorScheme="purple"
                  size="lg"
                  width="xs"
                >
                  Update Profile
                </Button>
              </Stack>
            </>
          )}
        </Box>

        <div className="table-responsive">
          <table className="table text-nowrap">
            <thead>
              <tr>
                <th>TeamId</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <CommentProfile
                  // editing={editingWidget.id === widget.id}
                  comment={comment}
                  teamId={comment.teamId}
                />
              ))}
            </tbody>
          </table>
        </div>
      </VStack>
    </div>
  );
};

export default Profile;