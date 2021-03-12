import './App.css';
import React from 'react';
import CampoEnviarMensagem from './componentes/CampoEnviarMensagem';
import Mensagem from './componentes/Mensagem';

class App extends React.Component{
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
      nome: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMsg
    };
  

    const novaLista = [...this.state.mensagens, novaMsg];

    this.setState ({
      mensagens: novaMsg,
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
        <CampoEnviarMensagem
          nomeUsuario={msg.nomeUsuario}
          msgUsuario={msg.msgUsuario}
        />
      );
    });
    return (
      <div className={'whats-container'}>
        <div>
          <input
          value={this.state.valorInputUsuario}
          onChange={this.onChangeInputUsuario}
          placeholder={"Nome Usuário"}
          />

          <input
          value={this.state.valorInputMsg}
          onChange={this.onChangeInputMsg}
          placeholder={'Mensagem'}
          />

          <button onClick={this.adicionaMsg}>Enviar</button>
        </div>        
      </div>
    );
  }
}

export default App;
