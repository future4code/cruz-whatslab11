import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    mensagens: [
      {
        nomeUsuario: "",
        msgUsuario: ""
      }
    ],
    valorInputUsuario: "",
    valorInputMsg: ""
  }

  adicionaMsg = () => {
    const novaMsg = {
      nomeUsuario: this.state.valorInputUsuario,
      msgUsuario: this.state.valorInputMsg
    };

    const novaLista = [...this.state.mensagens, novaMsg];

    this.setState({
      mensagens: novaLista,
      valorInputUsuario: "",
      valorInputMsg: ""
    });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMsg = (event) => {
    this.setState({ valorInputMsg: event.target.value });
  };

  render() {
    const listaDeMsg = this.state.mensagens.map((msg) => {
      return (
        <p>
          <b>{msg.nomeUsuario}:</b> {msg.msgUsuario}
        </p>
      );
    });

    return (
      <div className={'whats-container'}>
        <div>
        {listaDeMsg}
        </div>
        <div>
          <input placeholder='Nome' onChange={this.onChangeInputUsuario} value={this.state.valorInputUsuario} />

          <input placeholder='Mensagem' onChange={this.onChangeInputMsg} value={this.valorInputMsg} />

          <button onClick={this.adicionaMsg}>Enviar</button>
        </div>
    );
  }
}

export default App;