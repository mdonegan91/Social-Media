import React from "react";
import NewFriend from './NewFriend';

const mainFriendsFriendsInfo = [
  {
    name: 'Dawg',
    img: 'https://media.istockphoto.com/id/481451110/photo/sad-looking-british-bulldog-wearing-baseball-cap.jpg?s=612x612&w=0&k=20&c=HjwCBCm4FScYwxOyVV8alPYtf964x1ArkIsYdA9Fpho='
  },
  {
    name: 'Brutus',
    img: 'https://fashionweekonline.com/wp-content/uploads/2021/02/karsten-winegeart-featured-1-696x465.jpg'
  },
  {
    name: 'Spike',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ11Mbs47t_0PFMkaD1sxz2Ii8-nj22iCuKGA&usqp=CAU'
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