import React, { useEffect, useState } from 'react';
import SingaleFriend from '../SingaleFriend/SingaleFriend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data));
    }, [])
    return (
        <div>
            <h2>Hlow friends. How are you?</h2>
            <p>Parla kichu tk dhar dis...: {friends.length}</p>
            {
                friends.map(friend => <SingaleFriend key={friend.id} friend={friend}></SingaleFriend> )
            }
        </div>
    );
};

export default Friends;