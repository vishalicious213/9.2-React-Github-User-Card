import React from 'react';
import axios from 'axios';
import './App.css';
import Usercard from './components/Usercard';
import Followers from './components/Followers';
// import Search from './components/Search';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          user: 'vishalicious213',
          userData: [],
          followersData: [],
          search: '',
          typedString: '',
        }
    }

    // axios call to GitHub API to get main user's data for top of screen
    getUserData = () => {
      axios
        .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${this.state.user}`)
        .then(results => {
          // console.log(results);
          this.setState({userData: results.data});
        })
        .catch(error => console.log('Error: ', error));
    }

    // axios call with main user's login name to get followers list data
    getFollowersData = () => {
      axios
        .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${this.state.user}/followers`)
        .then(results => {
          // console.log(results);
          console.log('Getting followers again')
          this.setState({followersData: results.data});
        })
        .catch(error => console.log('Error: ', error));
    }

// lifecycle. run these when the component mounts for the first time
    componentDidMount() {
      this.getUserData();
      this.getFollowersData();
    }

    // input field's event handler
    handleSearch = event => {
      this.setState({typedString: event.target.value});
      console.log('Search: ', this.state.typedString);
    }

    // submit event handler. attach to <form>
    handleSubmit = event => {
      event.preventDefault();
      this.setState({user: this.state.typedString});
      this.updateUser();
      // alert('handleSubmit: ', this.state.user);
    }

    updateUser = () => {
      console.log('Submit: ', this.state.user);
    }

    componentDidUpdate(prevProps, prevState) {
      // alert();
      console.log('prevState: ', prevState.user);
      console.log('thisState: ', this.state.user);
      if (prevState.user !== this.state.user) {
        // alert('User state has changed'); // I was using a pipe (|) instead of bang (!) !!!
        this.getUserData();
        this.getFollowersData();
      }
    }

    render() {
      // console.log('Userdata: ', this.state.userData)
      // console.log(this.state.userData.name)
      // console.log('Followersdata: ', this.state.followersData)
      return (
        <div className="App">
          {/* <Search /> */}

      {/* <form className='search-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.typedString}
          onChange={this.handleSearch}
          name='search'
          placeholder='Enter username'
        />
        <button type='submit'>Search</button>
      </form> */}

          <header className="App-header">
            React GitHub User Card
          </header>
          <Usercard 
            userData={this.state.userData} 
            handleSubmit={this.handleSubmit}
            typedString={this.typedString}
            handleSearch={this.handleSearch} 
          />
          {/* <Followers followersData={this.state.followersData} getUserData={this.getUserData} /> */}
        </div>
      )
    }
}

export default App;

// https://cors-anywhere.herokuapp.com/