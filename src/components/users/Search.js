import React, {useState, useContext} from "react";
import GithubContext from "../../context/gihub/githubContext";
import AlertContext from "../../context/alert/alertContext";


const Search =(props)=>{
    const {searchUsers, users, clearUsers} = useContext(GithubContext);
    const  {setAlert} = useContext(AlertContext)
    const [ text, setText ] = useState('')

    const onChange = (e)=>{
        setText(e.target.value)
        setAlert(null, null)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if(text === ''){
           setAlert('please enter something', 'light')
        }

        searchUsers(text);
        setText('')
    }

    const onClick = ()=>{
        clearUsers()
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
                {users.length > 0 && <button className="btn btn-light btn-block" onClick={onClick}> Clear </button>}
            </div>
        )
    
}

export {Search as default}