import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDeatil = () => {
    const {friendId} = useParams();

    const [friend, setFriend] = useState({});

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setFriend(data));
    },[])

    return (
        <div>
            <h1>This is Deatils of a Bondhu: {friendId}</h1>
            <h3>Name : {friend.name }</h3>
            <h3>Name : {friend.username }</h3>
            <h4>Name : {friend.email }</h4>
            <h5>Website: {friend.website}</h5>
            <h6>Phone : {friend.phone}</h6>
            <p>Addresh : {friend.address?.city}</p>
            <p>lat : {friend.address?.geo?.lat}</p>
        </div>
    );
};

export default FriendDeatil;