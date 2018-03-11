import React, { Component } from 'react';

import Time from './Time';
import Partida from './Partida';

class PlacarContainer extends Component {
    constructor() {
        super();
        this.state = {
            golsCasa: 0,
            golsVisitante: 0
        }
    }

    marcarGolCasa() {
        this.setState({
            golsCasa: this.state.golsCasa + 1
        });
    }

    marcarGolVisitante() {
        this.setState({
            golsVisitante: this.state.golsVisitante + 1
        });
    }

    render() {
        const { partida, casa, visitante } = this.props;

        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                    <h3>Casa</h3>
                    <Time nome={casa.nome} gols={this.state.golsCasa} marcarGol={this.marcarGolCasa.bind(this)} />
                </div>
                <div>
                    <Partida {...partida} />
                </div>
                <div>
                    <h3>Visitante</h3>
                    <Time nome={visitante.nome} gols={this.state.golsVisitante} marcarGol={this.marcarGolVisitante.bind(this)} />
                </div>
            </div>
        );
    }
}

export default PlacarContainer;
