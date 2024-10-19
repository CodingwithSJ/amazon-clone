import React from 'react'
import './Trending.css'

function Trending(props) {
    
    return (
        <div className="Trending">
            <div className="Trending-info">{props.title}</div>
            <img src={props.image} />
            <div className="Trending-link">{props.link}</div>
        </div>
    )
}

export default Trending
