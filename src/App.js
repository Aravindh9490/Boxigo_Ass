import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import MyMoves from './components/MyMoves'
import Profile from './components/Profile'
import Quote from './components/Quote'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MyMoves} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/quote" component={Quote} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
