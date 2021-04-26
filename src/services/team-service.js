const getTeams = () => {
       return fetch(`https://api.opendota.com/api/teams`)
            .then(response => response.json())

    }

const getTeamById = (teamId) => {

      return fetch(`https://api.opendota.com/api/teams/${teamId}?api_key=63643084-c099-4b19-a918-a260b161f191`)
            .then(response => response.json())
    }
const getMatchByTeam = (teamId) => {

      return fetch(`https://api.opendota.com/api/teams/${teamId}/players?api_key=63643084-c099-4b19-a918-a260b161f191`)
            .then(response => response.json())
    }



const renderTeams = (teams) => {
        console.log(teams)
    }

export default {
    getTeamById, getTeams
}