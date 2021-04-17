import React from 'react'

export class PrototypeApi extends React.Component {
    getTeams = () => {
        fetch('https://api.opendota.com/api/teams')
            .then(response => response.json())
            .then(this.renderTeams)
    }

    getTeamById = () => {
        fetch('https://api.opendota.com/api/teams/1883502')
            .then(response => response.json())
            .then(this.renderTeams)

    }

    renderTeams = (teams) => {
        console.log(teams)
    }

    render() {
        return(
            <div>
            <button onClick={this.getTeams}>
                Get Teams
            </button>
            <button onClick={this.getTeamById}>
                Get Teams by id
            </button>
            </div>
        )
    }
}