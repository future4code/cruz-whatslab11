import React from 'react'

class CampoEnviarMensagem extends React.Component {
    render() {
        return (
            <div>
                <input placeholder='Nome' onChange={this.props.onChangeNome} value={this.props.valorInputNome} />
                <input placeholder='Mensagem' onChange={this.props.onChangeMensagem} value={this.props.valorInputMensagem} />
                <button onClick={this.props.onClickEnivar}>Enviar</button>
            </div>
        )
    }

}

export default CampoEnviarMensagem