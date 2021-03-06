import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import TratadorErros from './TratadorErros'

class FormularioLivro extends Component {
  constructor(props) {
    super(props);
    this.state = { titulo: '', preco: '', autorId: '' };
    this.handleLivroSubmit = this.handleLivroSubmit.bind(this);
  }

  handleLivroSubmit(e) {
    e.preventDefault();
    let titulo = this.state.titulo.trim();
    let preco = this.state.preco.trim();
    let autorId = this.state.autorId;

    $.ajax({
      url: 'https://cdc-react.herokuapp.com/api/livros',
      contentType: 'application/json',
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify({ titulo: titulo, preco: preco, autorId: autorId }),
      success: novaListagem => {
        PubSub.publish('atualiza-lista-livros', novaListagem);
        this.setState({ titulo: '', preco: '', autorId: '' });
      },
      error: res => {
        if (res.status === 400) {
          new TratadorErros().publicaErros(res.responseJSON);
        }
      },
      beforeSend: () => PubSub.publish('limpa-erros', {})
    });

    this.setState({ titulo: '', preco: '', autorId: '' });
  }

  salvaAlteracao(nomeInput, evento) {
    this.setState({ [nomeInput]: evento.target.value });
  }

  render() {
    let autores = this.props.autores.map(autor =>
      <option key={autor.id} value={autor.id}>{autor.nome}</option>
    );

    return (
      <div className="autorForm">
        <form
          className="pure-form pure-form-aligned"
          onSubmit={this.handleLivroSubmit}>
          <InputCustomizado
            id="titulo"
            name="titulo"
            label="Titulo: "
            type="text"
            value={this.state.titulo}
            placeholder="Titulo do livro"
            onChange={this.salvaAlteracao.bind(this, 'titulo')} />

          <InputCustomizado
            id="preco"
            name="preco"
            label="Preço: "
            type="decimal"
            value={this.state.preco}
            placeholder="Preço do livro"
            onChange={this.salvaAlteracao.bind(this, 'preco')} />

          <div className="pure-controls">
            <select
              value={this.state.autorId}
              name="autorId"
              onChange={this.salvaAlteracao.bind(this, 'autorId')}>
              <option value="">Selecione</option>
              {autores}
            </select>
          </div>

          <div className="pure-control-group">
            <label></label>
            <button type="submit" className="pure-button pure-button-primary">
              Gravar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

class TabelaLivros extends Component {
  render() {
    let livros = this.props.lista.map(livro =>
      (<tr key={livro.titulo}>
        <td>{livro.titulo}</td>
        <td>{livro.autor.nome}</td>
        <td>{livro.preco}</td>
      </tr>)
    );

    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>
          {livros}
        </tbody>
      </table>
    );
  }
}

export default class LivroBox extends Component {
  constructor(props) {
    super(props);
    this.state = { lista: [], autores: [] };
  }

  componentDidMount() {
    $.ajax({
      url: 'https://cdc-react.herokuapp.com/api/livros',
      dataType: 'json',
      success: data => this.setState({ lista: data })
    });

    $.ajax({
      url: 'https://cdc-react.herokuapp.com/api/autores',
      dataType: 'json',
      success: data => this.setState({ autores: data })
    });

    PubSub.subscribe('atualiza-lista-livros', (_, lista) =>
      this.setState({ lista: lista }));
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Cadastro de Livros</h1>
        </div>
        <div className="content" id="content">
          <FormularioLivro autores={this.state.autores} />
          <TabelaLivros lista={this.state.lista} />
        </div>
      </div>
    );
  }
}
