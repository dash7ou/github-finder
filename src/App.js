import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/layout/Navbar';
import UserList from './components/users/UsersList';
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import UserPage from "./components/users/UserPage"
import './App.css';


class App extends Component {
  state = {
    dataLoading: false,
    users: [],
    user: {},
    alert: null
  };

  // async componentDidMount() {
  //   this.setState(() => ({ dataLoading: true }));
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState(() => ({ dataLoading: false, users: res.data }));
  // }

  getUser = async (username)=>{
    this.setState(() => ({ dataLoading: true }));
    try{
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState(() => ({ dataLoading: false, user: res.data }));
    }catch(err){
      this.setState({
        dataLoading: false,
        user: {}
      })
      return this.setAlert("No User Found", "light")
    }
  }

  searchUsers = async (text)=>{
    this.setState(() => ({ dataLoading: true }));
    try{
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      if(res.data.items.length === 0){
        this.setState({users: []})
        return this.setAlert("No User Found", "light")
      }
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
      return this.setState(()=>({alert: null}))
    }
    return this.setState({ alert: {msg, type}, dataLoading:false})
    
  }
  render() {
    const {user, dataLoading} = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' />
          <div className='container'>
            { this.state.alert && <Alert alert={this.state.alert}/>}
            <Switch>
              <Route exact path="/" render={props=>(
                <Fragment>
                      <Search 
                        searchUsers={this.searchUsers} 
                        clearUsers={this.clearUsers} 
                        users={this.state.users}
                        setAlert={this.setAlert}
                      />
                      <UserList loading={this.state.dataLoading} users={this.state.users} />
                    </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render ={props=>(
                <UserPage {...props} getUser={this.getUser} user={user} loading={dataLoading}/>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
