import React from 'react';
import {Div, Buttonn} from './style'

class Button extends React.Component{

  evento(){
    alert('Hola Delli');
  }

  render(){
    return (
            <Div>
              <Buttonn onClick={this.evento}>{this.props.buscar}</Buttonn>
            </Div>
    );
  }
}

export default Button;
//<Buttonn onClick={()=>this.props.evento()}>{this.props.buscar}</Buttonn>
