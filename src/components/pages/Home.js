import React , {Fragment } from 'react';
import UserList from "../users/UsersList";
import Search from "../users/Search";

const Home = ()=>(
    <Fragment>
        <UserList/>
        <Search />
    </Fragment>
)



export { Home as default }