import React from 'react';
import {Inputt, Div,H1} from './styled'

class Title extends React.Component{

  render(){
    return (
              <div>
                <Div>
                  <H1>{this.props.bienvenidos}</H1>
                  <Inputt></Inputt>
                </Div>
              </div>
    );
  }
}

export default Title;
