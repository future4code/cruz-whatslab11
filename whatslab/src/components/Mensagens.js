import React from 'react';
import styled from "styled-components";

function Mensagens(props) {
    return (
        <div>
            <b>{props.nomeUsuario}{props.doisPontos}</b> 
            <span> {props.msgUsuario}</span>
        </div>
    );
};

export default Mensagens
