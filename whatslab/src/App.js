import './App.css';
import React from 'react';
import styled from "styled-components";
import Mensagens from './components/Mensagens';

const ContainerWhats = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 5px;
  max-width: 80vw;
  min-width: 20vw;
  margin: auto;
  margin-top: 40px;

  // Background image nova aqui
  background-image: url("https://i.pinimg.com/originals/e9/08/a5/e908a5bd5add462362faedb5e0502354.webp");
`
const ContainerMensagens = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse; //Pra começar de baixo pra cima
  height: 70vh;
  border-radius: 5px;
  padding: 5px;
  margin: auto;
  width: 100%;
  overflow-y: auto; //Liberar a rolagem caso tenha muitas mensagens
`

//Fiz outra div pra ela não ficar pequena quando não tiver msg
const DivMensagens = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`

// Diminui o max-width para manter as proporções do inputs independente do tamanho da tela.
const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`
// Margens direita adicionadas aos inputs
const InputUsuario = styled.input`
  border: none;
  background-color: #FFFFFF;
  padding: 5px;
  margin-right: 4px;
  max-width: 20%;
  height: 20px;
  border-radius: 3px;
`
const InputMsg = styled.input`
  border: none;
  background-color: #FFFFFF;
  width: 80%;
  border-radius: 5px;
  margin-right: 4px;  
  padding: 6px;
`
const BotaoEnviar = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #F66800;
  color: #FFFFFF;
  min-width: 18%;
`

//Criei uma estilazação que é o que tem em comum nas mensagens dos 'outros' e do 'eu'
const EstiloMensagens = styled.div`
  border-radius: 3px;  
  box-shadow: 1.2px 1.2px 5px gray;

  // Aumentei um pouco o margin de 0.1rem para 0.3rem para criar margem entre os balões.
  margin: 0.3rem 0.2rem;
  padding: 0.2rem 0.9rem;
  max-width: 60%;
  min-width: 10%;
  word-wrap: break-word;

  font-weight: 400;
  line-height: 1.3;
  position: relative;
`
//Tirei o if pq não estava usando o else, e coloquei algumas estilizações nos dois 
const MensagemEu = styled(EstiloMensagens)`
  background-color: #DDF7CB;
  align-self: flex-end;
  &:after {
    content: '';
    border: 15px solid transparent;
    border-top-color: #DDF7CB;
    position: absolute;
    top: 0px;
    right: -8px;
  };
`
const MensagemOutro = styled(EstiloMensagens)`
  background-color: #F0F2F5;
  align-self: flex-start;
  margin-left: 10px;
  &:before {
    content: '';
    border: 15px solid transparent;
    border-top-color: #F0F2F5;
    position: absolute;
    top: 0px;
    left: -8px;
  };
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
  };

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
      this.adicionaMsg()
    };
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMsg = (event) => {
    this.setState({ valorInputMsg: event.target.value });
  };

  duploClick = (conteudo) => {
    const novaLista = [...this.state.mensagens];

    const indexMensagem = novaLista.findIndex((msg) => {
      return msg.msgUsuario === conteudo
    });

    novaLista.splice(indexMensagem, 1)

    this.setState({ mensagens: novaLista })
  };


  render() {
    const listaDeMsg = this.state.mensagens.map((msg) => {
      if ((msg.nomeUsuario !== "") && (msg.msgUsuario !== "")) {
        const nome = msg.nomeUsuario.toLowerCase()
        if (nome === 'eu') {
          return (
            <MensagemEu onDoubleClick={() => this.duploClick(msg.conteudo)}>
              <Mensagens
                msgUsuario={msg.msgUsuario}
              />
            </MensagemEu>
          );
        } else {
          return (
            <MensagemOutro onDoubleClick={() => this.duploClick(msg.conteudo)}>
              <Mensagens
                nomeUsuario={msg.nomeUsuario}
                msgUsuario={msg.msgUsuario}
              />
            </MensagemOutro>
          );
        };
      };
    });

    return (
      <ContainerWhats>
        <ContainerMensagens>
          <DivMensagens>
            {listaDeMsg}
          </DivMensagens>
        </ContainerMensagens>

        <ContainerInputs>
          <InputUsuario placeholder='Nome' onChange={this.onChangeInputUsuario} value={this.state.valorInputUsuario} />

          <InputMsg placeholder='Mensagem' onKeyUp={this.keyPressAddMsg} onChange={this.onChangeInputMsg} value={this.state.valorInputMsg} />

          <BotaoEnviar onClick={this.adicionaMsg}>Enviar</BotaoEnviar>
        </ContainerInputs>
      </ContainerWhats>
    );
  };
};

export default App;