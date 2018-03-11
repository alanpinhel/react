import React, { Component } from 'react';

import BotaoGol from './BotaoGol';

class Time extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.nome}</h1>
                <h2>{this.props.gols}</h2>
                <BotaoGol marcarGol={this.props.marcarGol} />
            </div>
        );
    }
}

export default Time;
