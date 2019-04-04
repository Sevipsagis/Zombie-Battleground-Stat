import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Container/Home';
import Card from './Container/Card';
import Error from './Container/Error'

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/card/" component={Card} />
        <Route component={Error} />
      </Switch>
    )
  }

  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    );
  }
}

export default App;
