import React from 'react';
import {Div,Input, Label, Habitacion, Adul, Nino} from './style'

class Habitaciones extends React.Component{


  render(){
    return (
              <Div>
                <Habitacion>
                  <Label>{this.props.habitaciones}</Label>
                  <Input></Input>
                </Habitacion>
                <Adul>
                  <Label>{this.props.adultos}</Label>
                  <Input></Input>
                </Adul>
                <Nino>
                  <Label>{this.props.nino}</Label>
                  <Input></Input>
                </Nino>
              </Div>

    );
  }
}

export default Habitaciones;
