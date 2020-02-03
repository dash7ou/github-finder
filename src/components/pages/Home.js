import React , {Fragment } from 'react';
import UserList from "../users/UsersList";
import Search from "../users/Search";

const Home = ()=>(
    <Fragment>
        <Search />
        <UserList/>
    </Fragment>
)



export { Home as default }