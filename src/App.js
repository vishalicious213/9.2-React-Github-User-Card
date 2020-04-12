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
          user: 'vishalicious213',
          userData: [],
          followersData: [],
          search: '',
        }
    }

    componentDidMount() {
      const GetUserData = () => {
        axios
          .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${this.state.user}`)
          .then(results => {
            // console.log(results);
            this.setState({userData: results.data});
          })
          .catch(error => console.log('Error: ', error));
      }

      // const UpdateUser = (props) => {
      //   this.setState({user: props})
      // }

      const GetFollowersData = () => {
        axios
          .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${this.state.user}/followers`)
          .then(results => {
            // console.log(results);
            console.log('Getting followers again')
            this.setState({followersData: results.data});
          })
          .catch(error => console.log('Error: ', error));
      }


      GetUserData();
      GetFollowersData();
    }

    // componentDidUpdate() {
      getSearchText = event => {
        event.preventDefault();
        console.log('typed: ', event.target.value);
        this.setState({search: event.target.value});
        console.log('searchState: ', this.state.search);
      }

      submitSearch = event => {
        event.preventDefault();
        console.log(event.target.value);
        console.log('searchState from submitSearch: ', this.state.search);
        console.log('user before: ', this.state.user);
        this.setState({user: this.state.search});
        console.log('user after: ', this.state.user);
        // // setQuery(search);
        // this.setState(search: '');
        // // setSearch('')
      }

    // }


    render() {
      // console.log('Userdata: ', this.state.userData)
      // console.log(this.state.userData.name)
      // console.log('Followersdata: ', this.state.followersData)
      return (
        <div className="App">
          <Search />

      <form className='search-form' onSubmit={this.submitSearch}>
        <input className='search-bar' type='text' onChange={this.getSearchText} placeholder='Enter username'/>
        <button className='search-button' type='submit'>Search</button>
      </form>

          <header className="App-header">
            React GitHub User Card
          </header>
          <Usercard userData={this.state.userData} />
          <Followers followersData={this.state.followersData} getUserData={this.GetUserData} updateUser={this.UpdateUser} />
        </div>
      )
    }
}

export default App;

// https://cors-anywhere.herokuapp.com/