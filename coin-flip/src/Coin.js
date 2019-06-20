import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img alt={this.props.data.side} src={this.props.data.imgSrc} />
            </div>
        );
    }
}
export default Coin;