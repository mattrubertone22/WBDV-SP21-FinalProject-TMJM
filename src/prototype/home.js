import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import FeaturedTeamsCard from "./featured-teams-card";
import userService from "../services/user-service";
import SignUpWidget from "./signup-widget";
import commentService from "../services/comment-service"
import FavoritesWidget from "./favorites-widget";


const Home = () => {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [statusCode,setStatusCode] = useState("");
    const [match, setMatch] = useState([]);

    useEffect(() => {
        userService.profile().then((currentUser) => {
         setCurrentUser(currentUser);
      console.log("inside1234 function", currentUser);
    });



    }, [])
    return(

        <div >
            <div className="row">
            <div className="col-12 col-md-4">
                {
                    currentUser !== undefined &&
                    <FavoritesWidget user={currentUser}/>
                }
                {
                    currentUser === undefined &&
                    <SignUpWidget title={"Not signed in?"}
                                  page={"home"}/>
                }
            </div>

             <div className="col-12 col-md-8">
                      <FeaturedTeamsCard/>
              </div>
              </div>
        </div>
    )
}

export default Home;