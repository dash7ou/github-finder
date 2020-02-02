import React, {useReducer} from 'react';
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT } from "../type";


const AlertState = props =>{
    const initialState = null;

    const [state , dispatch ] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, type) => {
		if (!msg && !type) {
			dispatch({
                type: SET_ALERT,
                alert: null
            });
        }
        const alert = { msg , type}
        dispatch({
            type: SET_ALERT,
            alert
        });
		// setDataLoading(false);
	};

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}


export { AlertState as default }