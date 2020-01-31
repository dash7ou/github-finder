import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserList from './components/users/UsersList';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    dataLoading: false,
    users: []
  };

  async componentDidMount() {
    this.setState(() => ({ dataLoading: true }));
    const res = await axios.get('https://api.github.com/users');
    this.setState(() => ({ dataLoading: false, users: res.data }));
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <div className='container'></div>
      </div>
    );
  }
}

export default App;
