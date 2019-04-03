import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import CardTable from './Component/Table/CardTable'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get("https://api.loom.games/zb/v1/cards").then(res => {
      this.setState(res.data);
      console.log(this.state)
    })
  }

  render() {
    return (
      <div calssName="container">
        <div>
          <Header />
          <CardTable cardData={this.state.cards} />
        </div>
      </div>
    );
  }
}

export default App;
