import React from 'react';
import axios from 'axios';
import './App.css';
import Usercard from './components/Usercard';
import Followers from './components/Followers';
import Search from './components/Search';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          userdata: [],
        }
    }

    componentDidMount() {
      const GetUserdata = () => {
        axios
          .get('https://api.github.com/users/vishalicious213')
          .then(results => {
            console.log(results);
          })
          // .then(results => results.json())
          // .then(console.log(results.data))
          .catch(error => console.log('Error: ', error));
      }

      GetUserdata();
    }


    render() {
      console.log('Userdata: ', this.state.userdata)
      return (
        <div className="App">
          <Search />
          <header className="App-header">
            React GitHub User Card
          </header>
          <Usercard />
          <Followers />
        </div>
      )
    }
}

export default App;