import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
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
        case SET_LOADING:
            return {
                ...state,
                dataLoading: action.loading
            }
        default:
            return state
    }
}