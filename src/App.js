import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import UserList from './components/users/UsersList';
import Search from "./components/users/Search";
import './App.css';

class App extends Component {
  state = {
    dataLoading: false,
    users: []
  };

  // async componentDidMount() {
  //   this.setState(() => ({ dataLoading: true }));
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState(() => ({ dataLoading: false, users: res.data }));
  // }

  searchUsers = async (text)=>{
    this.setState(() => ({ dataLoading: true }));
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState(() => ({ dataLoading: false, users: res.data.items }));
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <div className='container'>
          <Search searchUsers={this.searchUsers}/>
          <UserList loading={this.state.dataLoading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
