import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Usercard from './components/Usercard';
import Followers from './components/Followers';
import Search from './components/Search';

const App = () => {
  const [user, setUser] = useState('vishalicious213');
  const [userData, setUserData] = useState([]);
  const [followersData, setFollowersData] = useState ([]);
  const [typedString, setTypedString] = useState('');

  const GetUserData = () => {
    axios
      .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${user}`)
      .then(results => {
        // console.log(results);
        setUser(results.data);
      })
      .catch(error => console.log('Error: ', error));
  }

  const GetFollowersData = () => {
    axios
      .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${user}/followers`)
      .then(results => {
        // console.log(results);
        console.log('Getting followers again')
        setFollowersData(results.data);
      })
      .catch(error => console.log('Error: ', error));
  }

  const handleSearch = event => {
    setTypedString(event.value);
    console.log(typedString);
  }

  const stopAxios = event => {
    // event.preventDefault();
    setUser(typedString);
    console.log(user);
  }

  // console.log('Userdata: ', this.state.userData)
  // console.log(this.state.userData.name)
  // console.log('Followersdata: ', this.state.followersData)
  return (

    <div className="App">
    {
      GetUserData(),
      GetFollowersData()
    }
      <Search />

  <form className='search-form' onSubmit={stopAxios}>
    {/* <input className='search-bar' name='search' type='text' value={this.state.search} onChange={this.getSearchText} placeholder='Enter username'/>
    <button className='search-button' type='submit' onSubmit={() => this.submitSearch}>Search</button> */}
    <input
      type='text'
      onChange={handleSearch}
      value={typedString}
      name='search'
      placeholder='Enter username'
    />
    <button>Search</button>
  </form>

      <header className="App-header">
        React GitHub User Card
      </header>
      <Usercard userData={userData} />
      <Followers followersData={followersData} getUserData={GetUserData} />
    </div>
  )
}

export default App;

// https://cors-anywhere.herokuapp.com/