import React, {useState, useContext} from "react";
import PropTypes from 'prop-types';
import GithubContext from "../../context/gihub/githubContext";


const Search =(props)=>{
    const {searchUsers} = useContext(GithubContext)
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

        searchUsers(text);
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
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export {Search as default}