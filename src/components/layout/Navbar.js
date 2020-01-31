import React from 'react';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className='fab fa-github' /> {title}
      </h1>
    </nav>
  );
};

export { Navbar as default };
