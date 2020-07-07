import React from 'react';
import axios from 'axios';
import './App.css';

import User from './components/User';
import Followers from './components/Followers';

class App extends React.Component {
  state = {
    inputText: '',
    user: {},
    followers: [],
  };

  componentDidMount() {
    const userName = 'dombruno';
    console.log('CDM');
    axios
      .all([
        axios.get(`https://api.github.com/users/${userName}`),
        axios.get(`https://api.github.com/users/${userName}/followers`),
      ])
      .then(
        axios.spread((userRes, followersRes) => {
          console.log('userRes', userRes.data);
          console.log('followersRes', followersRes.data);
          this.setState({
            inputText: '',
            user: userRes.data,
            followers: followersRes.data,
          });
        })
      );
  }
  handleChanges = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    if (this.state.user.length === 0) {
      console.log('loading!');
      return <p>Loading State...</p>;
    }
    return (
      <div className='App'>
        <h1> Github User Cards -- Component Lifecycle Project </h1>
        <form className='search-container container'>
          <h2>Search for a Github User: </h2>
          <input
            type='text'
            placeholder='does not work'
            value={this.state.inputText}
            onChange={this.handleChanges}
          />
          <button>search</button>
        </form>
        <div className='user-container container'>
          <User user={this.state.user} />
          <Followers followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
