import React, { Component } from 'react';

import './Pokecard.css';

const URL = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(- 3) : number);

class Pokecard extends Component {      
    render() {
        let imgSrc = `${URL}${padToThree(this.props.id)}.png`
        return (
            <div className="Pokecard">
                <div>{this.props.name}</div>
                <div>
                    <img alt={this.props.name} src={imgSrc}/>
                </div>
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.base_experience}</div>
            </div>
        );
    }
}

export default Pokecard;