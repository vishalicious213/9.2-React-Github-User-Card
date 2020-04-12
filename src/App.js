import React from 'react';
import axios from 'axios';
import './App.css';
import Usercard from './components/Usercard';
import Followers from './components/Followers';
import Search from './components/Search';
// import GitHubCalendar from "react-github-calendar";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          user: 'vishalicious213',
          userData: [],
          followersData: [],
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

      const UpdateUser = (props) => {
        this.setState({user: props})
      }

      const GetFollowersData = () => {
        axios
          .get(`https://non-cors.herokuapp.com/https://api.github.com/users/${this.state.user}/followers`)
          .then(results => {
            // console.log(results);
            this.setState({followersData: results.data});
          })
          .catch(error => console.log('Error: ', error));
      }

      GetUserData();
      GetFollowersData();
    }


    render() {
      // console.log('Userdata: ', this.state.userData)
      // console.log(this.state.userData.name)
      console.log('Followersdata: ', this.state.followersData)
      return (
        <div className="App">
          <Search />
          <header className="App-header">
            React GitHub User Card
          </header>
          <Usercard userData={this.state.userData} />
              {/* <GitHubCalendar
                username={this.state.user}
                fontSize={12}
                blockSize={10}
                blockMargin={4}
              /> */}
          <Followers followersData={this.state.followersData} getUserData={this.GetUserData} updateUser={this.UpdateUser} />
        </div>
      )
    }
}

export default App;

// https://cors-anywhere.herokuapp.com/