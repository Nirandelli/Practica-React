import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './component/Button'
import Input from './component/Input'

class App extends Component {

  render() {
    return (
              <div>
                <Input/>
                <Button/>
              </div>
    );
  }
}

export default App;
