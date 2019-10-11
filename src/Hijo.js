import React from 'react';

class Hijo extends React.Component{


    


    render(){
        return(
            <div>
                <h2>Hola { this.props.texto } </h2>
            </div>
        )
    }
}

export default Hijo;