import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import UserPage from './components/users/UserPage';
import GithubState from "./context/gihub/GithubState";
import AlertState from "./context/alert/AlertState.js";
import NotFound from "./components/pages/NotFound";
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
									component = {Home}
								/>
								<Route exact path='/about' component={About} />
								<Route
									exact
									path='/user/:login'
									component= {UserPage}
								/>
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export { App as default };
