import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Button from './component/Button'

class App extends Component {

  
  render() {
    // adentro de mi stancia coloco mi un atributo y lo recibe como un h1 porque cuando exporto asi lo coloque
    return <Button text='delli'  />;
  }
}

export default App;
