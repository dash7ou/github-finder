import React, {useContext} from 'react';
import User from './User';
import Spiner from "../layout/Spinner";
import GithubContext from "../../context/gihub/githubContext";

const UsersList = () => {

  const { loading, users} = useContext(GithubContext);

  if(loading){
    return <Spiner />
  }
  return (
    <div style={usersStyle}>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};


const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export { UsersList as default };
