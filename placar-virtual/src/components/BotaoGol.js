import React, { Component } from 'react';

class BotaoGol extends Component {
    handleClick(event) {
        event.preventDefault();
        this.props.marcarGol();
    }

    render() {
        return (
            <button onClick={this.handleClick.bind(this)}>Gol!</button>
        );
    }
}

export default BotaoGol;
