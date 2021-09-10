import React from "react";
import Opciones from "./Opciones";
import Historia from "./Historia";
import data from "../data.json";
import Recordatorio from "./Recordatorio";
import Swal from 'sweetalert2'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      elementIndex: 0,
      seleccionPrevia: "",
      listaHistorial: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    new Swal ({
        title: 'Nueva Historia!',
        text: 'Elige tu propia aventura',
        icon: 'info',
        confirmButtonColor: '#3085d9', 
        confirmButtonText: 'Go!'
     })

  }


  handleClick(boton) {
    if (this.state.contador > 3) {
      Swal.fire("Fin de la historia");
    }

    else if (this.state.elementIndex % 2 === 0) {
      if (boton === "A") {
        this.setState({ elementIndex: this.state.elementIndex + 1 });
      } else {
        this.setState({ elementIndex: this.state.elementIndex + 2 });
      }
    } else {
      if (boton === "A") {
        this.setState({ elementIndex: this.state.elementIndex + 2 });
      } else {
        this.setState({ elementIndex: this.state.elementIndex + 3 });
      }
    }

    this.setState({
      seleccionPrevia: boton,
      contador: this.state.contador + 1,
      listaHistorial: [
        ...this.state.listaHistorial,
        this.state.seleccionPrevia,
      ],
    });
  }

  render() {
    const { elementIndex, seleccionPrevia, listaHistorial } = this.state;
    return (
      <div className="layout">
        <Historia historia={data[elementIndex].historia} />
        <Opciones
          opcionA={data[elementIndex].opciones.a}
          handle={this.handleClick}
          opcionB={data[elementIndex].opciones.b}
        />

        <Recordatorio
          selections={seleccionPrevia}
          historial={listaHistorial.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        />
      </div>
    );
  }
}

export default Layout;
