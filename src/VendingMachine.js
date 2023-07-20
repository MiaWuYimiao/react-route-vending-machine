import React from "react";
import machineImg from './VendingMachine.png'
import Container from "./Container";
import { Link } from "react-router-dom"
import './VendingMachine.css'

function VendingMachine() {
    return (    
        <div className="VendingMachine"
            style={{
                backgroundImage: `url(${machineImg})`
        }}>
            <Container>
                <h1> hello i am a vending machine. what would you like to eat?</h1>
            </Container>
            <Container>
                <h1><Link to="/soda">SODA</Link></h1>
                <h1><Link to="/chips">CHIPS</Link></h1>
                <h1><Link to="/sardines">FRESH SARDINES</Link></h1>
            </Container>
        </div>
    );
}

export default VendingMachine;