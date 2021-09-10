import React from 'react';

class Recordatorio extends React.Component{

    render(){
        const {selections, historial} = this.props
        return(
            <div className="recordatorio">
                    <h3>Selección anterior: {selections}</h3>
                    <h4>Historial de historias elegidas:</h4>
                    <ul> {historial} </ul>
                </div>

        )
    }







}

export default Recordatorio;