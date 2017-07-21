import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Title from './component/Title';
import DateArrive from './component/DateArrive';
import DateExit from './component/DateExit';
import Habitaciones from './component/Habitaciones';
import {Div} from './styled'

class App extends Component {

  render() {
    return (
              <Div >
                <Title bienvenidos="Bienvenidos"/>
                <DateArrive dateArrive="Fecha de llegada"></DateArrive>
                <DateExit dateExit="Fecha de Salida"/>
                <Habitaciones habitaciones="Habitaciones" adultos="Adultos" nino="Ninos"/>
                <Button buscar="BUSCAR EL MEJOR PRECIO"/>
              </Div>
    );
  }
}

export default App;
