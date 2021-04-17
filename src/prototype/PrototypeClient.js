import React from 'react'
import {PrototypeApi} from './prototype.api'

export default class PrototypeClient extends React.Component {
    render() {
        return(
            <div>
            <h1>Prototype Client</h1>
            <PrototypeApi />
            </div>
        )
    }
}