import React from 'react';
import styled from "styled-components";

//Pro nome ficar em cima
const Nome = styled.span `
    color: #f66800;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
`
const ContainerMsg = styled.div `
    display: flex;
    flex-direction: column;
`

function Mensagens(props) {
    return (
        <ContainerMsg>
            <Nome>{props.nomeUsuario}</Nome> 
            <span> {props.msgUsuario}</span>
        </ContainerMsg>
    );
};

export default Mensagens
