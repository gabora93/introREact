import React from 'react';
import Hijo from './Hijo';

class ComponenteConProps extends React.Component{


    state = {
        texto: this.props.textProp,
        otroTexto: "otro texto"
    }


    updateTexto = () => {
        this.setState({
            otroTexto: "otro texto cambiado desde boton"
        })
    }

    render(){
        return(
            <div>
                
                <h2>Hola { this.props.textProp } </h2>
                <Hijo texto={this.state.texto}></Hijo>
                <h1>{this.state.otroTexto}</h1>
                <button onClick={this.updateTexto} >CAMBIAR TEXTO</button>
            </div>
        )
    }
}

export default ComponenteConProps;