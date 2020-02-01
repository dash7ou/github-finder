import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Spiner from "../layout/Spinner";

class UserPage extends Component{
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }
       
    
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render(){
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        } = this.props.user
        if(this.props.loading){
            return <Spiner />
        }
        return(
            <Fragment>
                <Link to="/" className='btn btn-light'>Back to Search</Link>
                Hireable: {' '}
                {hireable ? (<i className="fas fa-check text-success"/>) : (
                    <i className="fas fa-times-circle text-danger"/>
                )}
                <div className="card grid-2">
                    <div className="all-center">
                        <img className="round-img" src={avatar_url} alt="" style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>location: {location ? location : "no-location"}</p>
                    </div>
                    <div>
                        {bio && (<Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>)}
                        <a href={html_url} className="btn btn-dark my-1"> Vist Github Profile</a>
                        <ul>
                            <li>
                                {login && (<Fragment>
                                        <strong>Username: </strong> {login}
                                    </Fragment>)}
                            </li>
                            <li>
                                {company && (<Fragment>
                                        <strong>Company: </strong> {company}
                                    </Fragment>)}
                            </li>
                            <li>
                                {blog && (<Fragment>
                                        <strong>Website: </strong> {blog}
                                    </Fragment>)}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary"> Followers: {followers}</div>
                    <div className="badge badge-success"> Following: {following}</div>
                    <div className="badge badge-light"> Public Repos: {public_repos}</div>
                    <div className="badge badge-dark"> Public Gists: {public_gists}</div>
                </div>
            </Fragment>
        )
    }
}


export { UserPage as default }