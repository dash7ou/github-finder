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
											setAlert={showAlert}
										/>
										<UserList />
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
