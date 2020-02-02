import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import UserList from './components/users/UsersList';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import UserPage from './components/users/UserPage';
import GithubState from "./context/gihub/GithubState";
import './App.css';

const App = () => {
	const [ users, setUsers ] = useState([]);
	const [ repos, setRepos ] = useState([]);
	const [ user, setUser ] = useState({});
	const [ alert, setAlert ] = useState(null);
	const [ dataLoading, setDataLoading ] = useState(false);


	const getUser = async (username) => {
		setDataLoading(true);
		try {
			const res = await axios.get(
				`https://api.github.com/users/${username}?client_id=${process.env
					.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			setDataLoading(false);
			setUser(res.data);
		} catch (err) {
			setDataLoading(false);
			setUser({});
			return showAlert('No User Found', 'light');
		}
	};


	const getUserRepos = async (username) => {
		setDataLoading(true);
		try {
			const res = await axios.get(
				`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env
					.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			setDataLoading(false);
			setRepos(res.data);
		} catch (err) {
			setDataLoading(false);
			setRepos([]);
			return showAlert('No repo Found', 'light');
		}
	};

	const clearUsers = () => {
		setUsers([]);
	};

	const showAlert = (msg, type) => {
		if (!msg && !type) {
			setAlert(null);
		}
		setAlert({ msg, type } );
		setDataLoading(false);
	};

	return (
		<GithubState>
			<Router>
				<div className='App'>
					<Navbar title='Github Finder' />
					<div className='container'>
						{alert && alert.msg && <Alert alert={alert} />}
						<Switch>
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Search
											clearUsers={clearUsers}
											users={users}
											setAlert={showAlert}
										/>
										<UserList loading={dataLoading} users={users} />
									</Fragment>
								)}
							/>
							<Route exact path='/about' component={About} />
							<Route
								exact
								path='/user/:login'
								render={(props) => (
									<UserPage
										{...props}
										getUser={getUser}
										user={user}
										loading={dataLoading}
										repos={repos}
										getUserRepos={getUserRepos}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		</GithubState>
	);
};

export { App as default };
