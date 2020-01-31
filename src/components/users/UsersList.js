import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
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
