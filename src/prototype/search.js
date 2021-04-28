import React, {useState, useEffect} from 'react'
import NavBar from "./NavBar";
import teamService from '../services/team-service';
import {Link, useParams, useHistory} from "react-router-dom";
import {
    Heading,VStack
} from "@chakra-ui/react"

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
              <VStack>
            <Heading fontSize='70px' color='#25274D' fontStyle='italic'>Search</Heading>


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
                  className="btn btn-primary wbdv-search-btn">
                Search
              </button>
                </div>
            </div>

            <div>
              <Link to={`/details/${results.team_id}`}>
              <p> Team Name: {results.name} </p>
              </Link>
              <img src={results.logo_url} width="200" height="200"/>

            </div>
            </VStack>
            </div>
        )
    }
export default SearchTeam