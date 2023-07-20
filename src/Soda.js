import React from "react";
import { Link } from "react-router-dom"
import Container from "./Container";
import sodaImg from './Soda.png';
import "./Soda.css"

function Soda() {
    return (
        <div className="Soda">
            <img src={sodaImg}/>
            <Container>
                <h1>OMG SUGERRRRR!</h1>
                <h1><Link style={{color:"white"}} to="/">Go Back</Link></h1>
            </Container>
            <img src={sodaImg}/>
        </div>

    )
}

export default Soda;