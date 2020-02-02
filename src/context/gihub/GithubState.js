import React , { useReducer } from 'react';
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";


import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from "../type";



const GithubState = props =>{
    const initialState = {
        users: [],
        user: {},
        repos: [],
        dataLoading: false
    }

    const [ state, dispatch ] = useReducer(GithubReducer, initialState);
    
    const searchUsers = async (text) => {
		setDataLoading(true);
		try {
			const res = await axios.get(
				`https://api.github.com/search/users?q=${text}&client_id=${process.env
					.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			if (res.data.items.length === 0) {
				clearUsers()
				// return showAlert('No User Found', 'light');
			}
			setDataLoading(false);
			dispatch({
                type: SEARCH_USERS,
                payload: res.data.items
            })
		} catch (err) {
			setDataLoading(false);
		}
    };
    
    const getUser = async (username) => {
		setDataLoading(true);
		try {
			const res = await axios.get(
				`https://api.github.com/users/${username}?client_id=${process.env
					.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			);
			setDataLoading(false);
			dispatch({
                type: GET_USER,
                payload: res.data
            })
		} catch (err) {
			setDataLoading(false);
            dispatch({
                type: GET_USER,
                payload: {}
            })
			// return showAlert('No User Found', 'light');
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
			dispatch({
                type: GET_REPOS,
                payload: res.data
            })
		} catch (err) {
			setDataLoading(false);
			dispatch({
                type: GET_REPOS,
                payload: []
            })
			// return showAlert('No repo Found', 'light');
		}
	};

    const clearUsers = ()=> dispatch({type: CLEAR_USERS})

    const setDataLoading = state => dispatch({ type: SET_LOADING, loading: state })
    return <GithubContext.Provider 
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.dataLoading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </GithubContext.Provider>
}

export {GithubState as default };