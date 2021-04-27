import { Nav, Navbar } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import userService from "../services/user-service";
import { useHistory } from "react-router-dom";
import "../index.css";
const NavBar = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [statusCode, setStatusCode] = useState("");
  const history = useHistory();
  useEffect(() => {
    userService.profile().then((currentUser) => {
      setCurrentUser(currentUser);
    });
  }, [statusCode]);

  const logout = () => {
    if (currentUser) {
      userService.logout().then(() => {
        setCurrentUser(null);
        history.push("/login");
      });
    }
  };

  return (
    <div className="web-navigation-bar">
      <Navbar>
        <h3 className="col-1 wbdv-site-title wbdv-center-in-div">
          <Navbar.Brand href="/home">Team Dota2</Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link href="/search">Search&nbsp;</Nav.Link>
            <Nav.Link href="/profile">Profile&nbsp;</Nav.Link>
            <Nav.Link href="/login">Login&nbsp;</Nav.Link>
            <Nav.Link href="/register">Register&nbsp;</Nav.Link>
          </Nav>
        </h3>
        <button onClick={logout}>Logout</button>
      </Navbar>
    </div>
  );
};

export default NavBar;