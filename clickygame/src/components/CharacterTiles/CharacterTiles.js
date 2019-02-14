import React from "react";
import "./style.css";

const CharacterTiles = props => (

    <div
        className="characterTiles"
        value={props.id}
        onClick={() => props.handleClick(props.id)}
    >
        <div className="img-container">
            <img alt={props.name} src={props.image} />

        </div>
    </div>

);




export default CharacterTiles;