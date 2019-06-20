import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class Flipper extends Component {
    static defaultProps = {
        title: "Flip The Coin",
        coins: [
            {side: "heads", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
            {side: "tails", imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"},
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            currentSide: null,
            numFlips: 0,
            numHeads: 0,
            numTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const newSide = choice(this.props.coins);
        this.setState(s => {
            let newState = {
                ...s,
                currentSide: newSide,
                numFlips: s.numFlips + 1,
                numHeads: s.numHeads + (newSide.side === "heads" ? 1 : 0),
                numTails: s.numTails + (newSide.side === "tails" ? 1 : 0)
            }
            return newState;
        });
    }

    handleClick(e) {
        this.flipCoin();
    }

    render() {
        return (
            <section className="Flipper">
                <h1>{this.props.title}</h1>
                {this.state.currentSide && <Coin data={this.state.currentSide} />}
                <button onClick={this.handleClick}>Click to Flip</button>
                <p>Number of flips: {this.state.numFlips}</p>
                <p>Number of heads: {this.state.numHeads}</p>
                <p>Number of tails: {this.state.numTails}</p>
            </section>
            
        );
    }
}
export default Flipper;