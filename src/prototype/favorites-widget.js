import {Link} from "react-router-dom";
import commentService from '../services/comment-service';
import {useEffect, useState} from "react";
import MatchRow from "./savedmatch";
import userService from "../services/user-service";

const FavoritesWidget = ({user}) => {
    const [favoriteMatch, setFavoriteMatch] = useState([]);
    const [user1,setUser1] = useState({});


    useEffect(() => {

        commentService.findMatchByUser(user.id).then((match)=>
{

        setFavoriteMatch(match)
        })
    }, [user.id])

    return (
            <div className="wbdv-widget-container">
            <h3 className="wbdv-center-in-div">Saved Match</h3>
            <div className="wbdv-widget-interior">
                <table position="absolute" className="table text-nowrap">
                    <thead>
                    <tr>
                        <th>matchId</th>
                        <th>Note</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        favoriteMatch.map((favoriteMatch)=>

                            <MatchRow
                                {...favoriteMatch}
                            />
                        )

                    }

                    </tbody>
                </table>
                </div>
            </div>

    )
}


export default FavoritesWidget