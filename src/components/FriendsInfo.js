import React from "react";
import NewFriend from './NewFriend';

const mainFriendsFriendsInfo = [
  {
    name: 'Dawg',
    img: 'https://media.istockphoto.com/id/481451110/photo/sad-looking-british-bulldog-wearing-baseball-cap.jpg?s=612x612&w=0&k=20&c=HjwCBCm4FScYwxOyVV8alPYtf964x1ArkIsYdA9Fpho='
  },
];

function FriendsInfo(){
  return (
    <React.Fragment>
      <hr/>
      {mainFriendsFriendsInfo.map((newFriend, index) => (
        <NewFriend name={newFriend.name}
          img={newFriend.img}
          key={index}/>
      ))}
    </React.Fragment>
  );
}

export default FriendsInfo;