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

    // componentDidUpdate(prevProps, prevState) {
    //   if (prevState.user |= this.state.user) {
    //     console.log('User state has changed');
    //     this.GetUserData();
    //   }
    // }

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

    handleSearch = event => {
      this.setState({typedString: event.target.value});
      console.log(this.state.typedString);
    }

    stopAxios = event => {
      // event.preventDefault();
      this.setState({user: this.state.typedString});
      console.log(this.state.user);
    }

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
          onChange={this.handleSearch}
          value={this.typedString}
          name='search'
          placeholder='Enter username'
        />
        <button>Search</button>
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