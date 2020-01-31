import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import UserList from './components/users/UsersList';
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import './App.css';

class App extends Component {
  state = {
    dataLoading: false,
    users: [],
    alert: null
  };

  // async componentDidMount() {
  //   this.setState(() => ({ dataLoading: true }));
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState(() => ({ dataLoading: false, users: res.data }));
  // }

  searchUsers = async (text)=>{
    this.setState(() => ({ dataLoading: true }));
    try{
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState(() => ({ dataLoading: false, users: res.data.items }));
    }catch(err){
      this.setState({
        dataLoading: false
      })
    }
  }

  clearUsers = ()=>{
    this.setState({users: []})
  }

  setAlert = (msg , type)=>{
    if(!msg && !type) {
      this.setState(()=>({alert: null}))
    }else{
      this.setState({ alert: {msg, type}, dataLoading:false})
    }
  }
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <div className='container'>
          { this.state.alert && <Alert alert={this.state.alert}/>}
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            users={this.state.users}
            setAlert={this.setAlert}
          />
          <UserList loading={this.state.dataLoading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
