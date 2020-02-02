import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import UserList from './components/users/UsersList';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import UserPage from './components/users/UserPage';
import GithubState from "./context/gihub/GithubState";
import AlertState from "./context/alert/AlertState.js"
import './App.css';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar title='Github Finder' />
						<div className='container'>
							<Alert/>
							<Switch>
								<Route
									exact
									path='/'
									render={(props) => (
										<Fragment>
											<Search
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
			</AlertState>
		</GithubState>
	);
};

export { App as default };
