import React from 'react';
import {Div,Input, Label} from './style'

class DateExit extends React.Component{

  render(){
    return(
          <Div>
            <Label>{this.props.dateExit}</Label>
            <Input></Input>
          </Div>
    )
  }
}

export default DateExit;
