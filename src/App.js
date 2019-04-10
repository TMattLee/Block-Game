import React, { Component } from 'react';
import AppContext, { app } from './context/app.context';
import Body from './components/Body/Body';
import './App.css';

import Header from './components/header';

class App extends Component {
  
  render() {
    return (
      <AppContext.Provider value={app}>
        <div className="App">
          <Header />
          <Body/>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
