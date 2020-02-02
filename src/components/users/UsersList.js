import React, {useContext} from 'react';
import User from './User';
import PropTypes from "prop-types";
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


UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export { UsersList as default };
