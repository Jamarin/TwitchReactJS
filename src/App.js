import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Detail } from './pages/detail'
import { DetailStream } from './pages/detailStream'
import { NotFound } from './pages/notFound'

import 'bulma/css/bulma.css'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/game/:gameId' component={Detail} />
          <Route exasct path='/stream/:userLogin' component={DetailStream} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
