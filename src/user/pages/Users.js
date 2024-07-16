import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'fran',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Robert_Downey_Jr-2008.JPG/800px-Robert_Downey_Jr-2008.JPG',
        places: 3
    }];
    return <UsersList items={USERS}/>
}

export default Users