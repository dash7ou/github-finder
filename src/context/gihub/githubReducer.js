import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from "../type";


export default (state, action) =>{
    switch(action.type){
        case SEARCH_USERS:
            return{
                ...state,
                users: action.payload
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case GET_USER:
            return{
                ...state,
                user: action.payload
            }
        case GET_REPOS:
            return{
                ...state,
                repos: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                dataLoading: action.loading
            }
        default:
            return state
    }
}