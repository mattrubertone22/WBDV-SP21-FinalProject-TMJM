import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {PrototypeApi} from './prototype.api'
import NavBar from "./NavBar";
import FeaturedTeamsCard from "./featured-teams-card";
import userService from "../services/user-service";
import SignUpWidget from "./signup-widget";

import FavoritesWidget from "./favorites-widget";


const Home = () => {
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        userService.getCurrentUser()
            .then((user) => {
                if (user !== null) {
                    setCurrentUser(user)
                }
            })
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

export default Home