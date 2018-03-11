import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: 'Maracanã/RJ',
        data: '01/06/2016',
        horario: '19h'
    },
    casa: {
        nome: 'Vasco'
    },
    visitante: {
        nome: 'Flamengo'
    }
};

class App extends React.Component {
    render() {
        return <PlacarContainer {...dados} />;
    }
}

export default App;