import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import teamService from '../services/team-service'
import ReactDOM from "react-dom";
import {
    Heading,VStack
} from "@chakra-ui/react"
const Details = () => {
    const {teamId} = useParams()
    const history = useHistory()
    const [team, setTeam] = useState({})
    useEffect(() => {
        teamService.getTeamById(teamId)
            .then(team => setTeam(team))
    },[teamId])
    return(
        <div>
        <VStack>
        <button onClick={()=>{history.goBack()}}>Back</button>
        <Heading fontSize='70px' color='darkblue' fontStyle='italic'>Team recent matches</Heading>

            <h2>{team.name}</h2>
            <img src={team.logo_url} width="200" height="200"/>
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

                                                        </VStack>
        </div>
    )
}

export default Details