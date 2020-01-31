import React from 'react';
import User from './User';
import PropTypes from "prop-types";
import Spiner from "../layout/Spinner";


const UsersList = ({ users , loading}) => {
  if(!users){
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


User.PropTypes = {
  User: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export { UsersList as default };
