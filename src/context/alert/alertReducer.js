import { SET_ALERT } from "../type"


export default (state , action) =>{
    switch(action.type){
        case SET_ALERT:
            return action.alert
        default:
            return state
    }
}