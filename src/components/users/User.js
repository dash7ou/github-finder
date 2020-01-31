import React from "react";


const User = ({user: { avatar_url, login, html_url }})=>{
    return(
            <div className="card text-center">
                <img src={avatar_url} alt='' className='round-img' style={{ width: '60px'}}/>
                <h3>{ login }</h3>
                <div>
                    <a href={html_url}  className="btn btn-dark btn-sm my-1" rel="noopener noreferrer" target='_blank'>More</a>
                </div>
            </div>
        )
}



export {User as default}