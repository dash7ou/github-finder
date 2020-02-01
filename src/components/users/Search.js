import React, {useState} from "react";
import PropTypes from 'prop-types';

const Search =(props)=>{
    const [ text, setText ] = useState('')

    const onChange = (e)=>{
        setText(e.target.value)
        props.setAlert(null, null)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(text === ''){
            props.setAlert('please enter something', 'light')
        }

        props.searchUsers(text);
        setText('')
    }

    const onClick = ()=>{
        props.clearUsers()
    }

        return(
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                        type='text' 
                        name='text' 
                        placeholder='Search Users....' 
                        value={text}
                        onChange={onChange}
                    />
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                </form>
                {props.users.length > 0 && <button className="btn btn-light btn-block" onClick={onClick}> Clear </button>}
            </div>
        )
    
}



Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export {Search as default}