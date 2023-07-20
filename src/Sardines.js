import React from "react";
import { Link } from "react-router-dom"
import Container from "./Container";
import './Sardines.css'

function Sardines() {
    return (
        <div
            className="Sardines"
            style={{
            backgroundImage:
                "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
        }}>
            <Container>
                <h1>you don't eat the sardines. the sardines, they eat you!</h1>
                <h1><Link style={{color:"white"}} to="/">Go Back</Link></h1>
            </Container>
        </div>
    )
}

export default Sardines;