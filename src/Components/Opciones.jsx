import React from 'react';


class Opciones extends React.Component {


    render(){
        const {handle, opcionA, opcionB} = this.props
        return(
            <div className="opciones">
                    <div className="opcion">
                        <button id="A" className="botones" onClick={() => handle("A")}> A </button>
                        <h2>{opcionA} </h2>
                    </div>
                    <div className="opcion">
                        <button id="B" className="botones" onClick={() => handle("B")}> B </button>
                        <h2>{opcionB}</h2>
                    </div>
            </div>

        )
    }

}
export default Opciones;