import './App.css';
import React from 'react';
import styled from "styled-components";

const ContainerMensagens = styled.div`
  height: 70vh;
  width: 30vw;
  border: 2px solid #5abeb1;
  border-radius: 5px;
  padding: 5px;
  margin: auto;
  margin-top: 20px;
`
const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 31vw;
`

const InputUsuario = styled.input`
  border: none;
  background-color: #f9eac3;
  padding: 5px;
  width: 26%;
  height: 22px;
  border-radius: 5px;
`
const InputMsg = styled.input`
  border: none;
  background-color: #f9eac3;
  width: 80%;
  border-radius: 5px;
`
const BotaoEnviar = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #f66800;
  color: #ffffff;
`


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


  keyPressAddMsg = (event) => {
    if (event.key === 'Enter') {
      this.adicionaMsg();
    }
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMsg = (event) => {
    this.setState({ valorInputMsg: event.target.value });
  };

  duploClick = (conteudo) => {
    const novaLista = [...this.state.mensagens]
    const indexMensagem = novaLista.findIndex((msg) => {
      return msg.msgUsuario === conteudo
    })

    novaLista.splice(indexMensagem, 1)

    this.setState({ mensagens: novaLista })
  }

  render() {
    const listaDeMsg = this.state.mensagens.map((msg) => {
      if ((msg.msgUsuario !== "") && (msg.msgUsuario !== "")) {
        return (
          <div onDoubleClick={() => this.duploClick(msg.msgUsuario)}>
            <b>{msg.nomeUsuario}:</b> {msg.msgUsuario}
          </div>
        );
      }
    });

    return (
      <div className={'whats-container'}>
        <ContainerMensagens>
          {listaDeMsg}
        </ContainerMensagens>
        <ContainerInputs>
          <InputUsuario placeholder='Nome' onChange={this.onChangeInputUsuario} value={this.state.valorInputUsuario} />

          <InputMsg placeholder='Mensagem' onKeyUp={this.keyPressAddMsg} onChange={this.onChangeInputMsg} value={this.state.valorInputMsg} />

          <BotaoEnviar onClick={this.adicionaMsg}>Enviar</BotaoEnviar>
        </ContainerInputs>
      </div>
    );
  }
}

export default App;