import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingaleFriend = (props) => {
    const {name, username, id } = props.friend;

    let navigate = useNavigate();

    const showFriendDetail =()=>{
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/'+ id}>Show Deatils</Link>
            <button onClick={showFriendDetail}> {username}: {id}</button>
        </div>
    );
};

export default SingaleFriend;