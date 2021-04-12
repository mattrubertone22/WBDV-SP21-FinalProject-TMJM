import React, {useState, useEffect} from 'react'

import teamService from '../services/team-service';
import {Link, useParams, useHistory} from "react-router-dom";


const SearchTeam = () => {
    const {title} = useParams()
    const [searchName, setSearchName] = useState("")
    const [results, setResults] = useState([])
    const history = useHistory()

    useEffect(() => {
        setSearchName(title)
        if(title) {
            teamService.getTeamById(title)
                .then(results => setResults(results))

        }
    }, [title])
        return(
            <div>
                <h1>Search</h1>

            <div className="row">
                <div className="col-9">
                    <input
                           onChange={(event) => {
                               setSearchName(event.target.value)
                           }}
                           className="form-control" value={searchName}/>
                </div>
                <div className="col-3">
              <button
                  onClick={() => {history.push(`/search/${searchName}`)}}
                  className="btn btn-primary btn-block">
                  Search
              </button>
                </div>
            </div>

            <div>
              <Link to={`/details/${results.team_id}`}>
              <p> Team Name: {results.name} </p>
              </Link>

            </div>
            </div>
        )
    }
export default SearchTeam