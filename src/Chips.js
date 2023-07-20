import React, { useState }from "react";
import { Link } from "react-router-dom"
import {v4 as uuid} from "uuid"
import Chip from './Chip'
import Container from "./Container";
import './Chips.css';

function Chips() {
    const [chips, setChips] = useState([])

    const handleClick = () => {
        const newChip = {
            id: uuid(),
            x: Math.random()*window.innerWidth,
            y: Math.random()*window.innerHeight
        }

        setChips(oldChips => ([
            ...oldChips,
            newChip
        ]))
    }

    return (
        <div className="Chips">
            <Container>
                <h1>BAGS EATEN: {chips.length}</h1>
                <span><button onClick={handleClick}>NOM NOM NOM</button></span>
                <h1><Link to="/">Go Back</Link></h1>
            </Container>
            {
                chips.map(chip => <Chip key={chip.id} chip={chip}/>)
            }
        </div>
    )
}

export default Chips;