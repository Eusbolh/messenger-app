import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MessengerContainer from 'modules/messenger/Messenger.container';

class App extends Component {
  render() {
    return (
      <div className="c-app-module">
        <div className="c-app-content-container">
          <Switch>
            <Route path="/" component={MessengerContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
