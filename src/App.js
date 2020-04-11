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
          .get('https://non-cors.herokuapp.com/https://api.github.com/users/vishalicious213')
          .then(results => {
            // console.log(results);
            this.setState({userdata: results.data});
          })
          .catch(error => console.log('Error: ', error));
      }

      GetUserdata();
    }


    render() {
      // console.log('Userdata: ', this.state.userdata)
      // console.log(this.state.userdata.name)
      return (
        <div className="App">
          <Search />
          <header className="App-header">
            React GitHub User Card
          </header>
          <Usercard userdata={this.state.userdata} />
          <Followers />
        </div>
      )
    }
}

export default App;

// https://cors-anywhere.herokuapp.com/