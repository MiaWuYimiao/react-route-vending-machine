import React from "react";
import chipsImg from "./Chips.png";

function Chip({chip}) {
    return (
        <img
            id={chip.id}
            src={chipsImg}
            style={{position:"absolute", top: `${chip.y}px`, left: `${chip.x}px`}}
            alt="bag of lay's chips"
        />
    )
}

export default Chip;