import React from 'react'
import {Link} from "react-router-dom";
import {PrototypeApi} from './prototype.api'
const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Link to="/search">
                Search
            </Link>
            <br/>
            <Link to="/details">
                Detail
            </Link>
                        <PrototypeApi />
        </div>
    )
}

export default Home