import React from 'react'

class Mensagem extends React.Component {
    render() {
        return (
            <div>
                <b>{this.props.nome}</b><span>{this.props.conteudo}</span>
            </div>
        )
    }
}

export default Mensagem