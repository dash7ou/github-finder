import React , { useReducer } from 'react';
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USER,
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
    
    return <GithubContext.Provider 
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.dataLoading
        }}>
            {props.children}
        </GithubContext.Provider>
}

export {GithubState as default };