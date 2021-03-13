import React from 'react';
import styled from "styled-components";

const CampoMensagem = styled.div `
  background-color: ${props => {
    if(props.msgUsuario === 'eu')  {
      return '#DDF7CB'
    } else {
      return '#FFFFFF';
    }
  }
};`

function Mensagens(props) {
    return (
        <CampoMensagem>
            <b>{props.nomeUsuario}{props.doisPontos}</b> 
            <span> {props.msgUsuario}</span>
        </CampoMensagem>
    );
};

export default Mensagens
