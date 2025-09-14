import React from 'react'


function Place(props) {
  return (
    <div className="component">
        <img src = {props.src}/>
        <div>
            <h2>{props.country}</h2>  
            <a href="https://www.google.com/maps" target="_blank">View on maps</a>
            <h1>{props.name}</h1>
            <p className="date">{props.date}</p>
            <p>{props.info}</p>
        </div>
    </div>
  )
}

export default Place