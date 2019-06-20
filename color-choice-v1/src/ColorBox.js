import React, { Component } from 'react';
import { randColor } from './helpers';
import './ColorBox.css';

class ColorBox extends Component {
    constructor() {
        super();
        this.state = {
            color: randColor()
        };
        this.handleClick = this.handleClick.bind(this);
        this.chooseColor = this.chooseColor.bind(this);
    }

    chooseColor() {
        let currentColor = this.state.color;
        let newColor;
        do{
            newColor = randColor();
        } while(currentColor === newColor)

        this.setState({color: newColor});
    }

    handleClick() {
        this.chooseColor();
    }

    render(){
        return (
            <div className="ColorBox" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

            </div>
        )
    }
}
export default ColorBox;