import React from 'react';
import {Div,Input, Label} from './styled'

class DateArrive extends React.Component{

  render(){
    return (
      <Div>
        <Label>{this.props.dateArrive}</Label>
        <Input></Input>
      </Div>
    );
  }
}

export default DateArrive;
