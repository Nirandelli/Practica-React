import React from 'react';

const blue = '#1b22cc';

class Button extends React.Component{

  //funcion que mando por props en un parrafo
  get  test(){
  return 'whatever-your-name-is-goes-here';
  }
  evento(){
    alert('aaaaaaayyyyyy');
  }
  //paso un color por state
  constructor(props){
    super(props);
    this.state={color:blue,
                name: 'Delli por state'
                };
  }


// paso por props mi texto y lo mando en un h1
  render(){
    return(
      <div style={{background: this.state.color}}>
        <h2>{this.state.name}</h2>
        <button onClick={this.evento}>hola</button>
        <p>{this.test}</p>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Button;
