import React from "react";
import { Link } from "react-router-dom";


const User = ({user: { avatar_url, login, html_url }})=>{
    return(
            <div className="card text-center">
                <img src={avatar_url} alt='' className='round-img' style={{ width: '60px'}}/>
                <h3>{ login }</h3>
                <div>
                    <Link to={`user/${login}`}  className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        )
}



export {User as default}


//  rel="noopener noreferrer" target='_blank'