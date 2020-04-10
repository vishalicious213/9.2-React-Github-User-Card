import React from 'react';
import './App.css';
import Usercard from './components/Usercard';
import Followers from './components/Followers';
import Search from './components/Search';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
      return (
        <div className="App">
          <Search />
          <header className="App-header">
            React GitHub User Card
          </header>
          <Usercard />
          <Followers />
        </div>
      );
    }
}

export default App;