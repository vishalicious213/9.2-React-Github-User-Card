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
      console.log(this.state.typedString);
    }

    // submit event handler. attach to <form>
    stopAxios = event => {
      // event.preventDefault();
      this.setState({user: this.state.typedString});
      console.log(this.state.user);
    }

    // button's event handler. initiates new axios call. i want it to use call from getUserData.
    getNewUser = event => {
      axios
        .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${this.state.typedString}`)
        .then(results => {
          console.log(results);
          this.setState({userData: results.data});
        })
        .catch(error => console.log('Error: ', error));
    }

    // componentDidUpdate(prevProps, prevState) {
    //   if (prevState.user |= this.state.user) {
    //     console.log('User state has changed');
    //     this.GetUserData();
    //   }
    // }

    render() {
      // console.log('Userdata: ', this.state.userData)
      // console.log(this.state.userData.name)
      // console.log('Followersdata: ', this.state.followersData)
      return (
        <div className="App">
          {/* <Search /> */}

      <form className='search-form' onSubmit={this.stopAxios}>
        {/* <input className='search-bar' name='search' type='text' value={this.state.search} onChange={this.getSearchText} placeholder='Enter username'/>
        <button className='search-button' type='submit' onSubmit={() => this.submitSearch}>Search</button> */}
        <input
          type='text'
          value={this.state.typedString}
          onChange={this.handleSearch}
          name='search'
          placeholder='Enter username'
        />
        <button
          type='submit'
          onClick={this.getNewUser}
        >Search</button>
      </form>

          <header className="App-header">
            React GitHub User Card
          </header>
          <Usercard userData={this.state.userData} />
          {/* <Followers followersData={this.state.followersData} getUserData={this.getUserData} updateUser={this.UpdateUser} /> */}
        </div>
      )
    }
}

export default App;

// https://cors-anywhere.herokuapp.com/


      // getSearchText = event => {
      //   // event.preventDefault();
      //   console.log('typed: ', event.target.value);
      //   this.setState({search: event.target.value});
      //   console.log('searchState: ', this.state.search);
      //   this.setState({user: this.state.search});
      //   console.log('userState: ', this.state.user);
      // }

      // submitSearch = event => {
      //   event.preventDefault();
      //   console.log(event.target.value);
      //   console.log('searchState from submitSearch: ', this.state.search);
      //   console.log('user before: ', this.state.user);
      //   // this.setState({user: this.state.search}, this.GetUserData);
      //   console.log('user after: ', this.state.user);
      //   // // setQuery(search);
      //   // this.setState(search: '');
      //   // // setSearch('')
      // }

    // }