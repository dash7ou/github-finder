import React, {Component} from "react";
import PropTypes from 'prop-types';

class Search extends Component{
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    onChange = (e)=>{
        this.setState({
            text: e.target.value
        })
        this.props.setAlert(null, null)
    }

    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('please enter something', 'light')
        }

        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    }

    onClick = ()=>{
        this.props.clearUsers()
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type='text' 
                        name='text' 
                        placeholder='Search Users....' 
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type='submit' value='Search' className='btn btn-dark btn-block'/>
                </form>
                {this.props.users.length > 0 && <button className="btn btn-light btn-block" onClick={this.onClick}> Clear </button>}
            </div>
        )
    }
}


export {Search as default}