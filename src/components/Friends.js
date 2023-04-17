import React from "react";
import Container from 'react-bootstrap/Container';
import FriendsInfo from "./FriendsInfo";


function Friends(){
  return (
    <React.Fragment>
      <Container className="mt=5">
      <h2>Dogs you may know</h2>
      <FriendsInfo />
      </Container>
    </React.Fragment>
  );
}

export default Friends;