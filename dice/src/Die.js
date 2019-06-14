import React, {Component} from "react";
import './Die.css';

class Die extends Component {
    render(){
        return (
            <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && 'roll-in-blurred-left'}`}></i>
        )
    }
}

export default Die;