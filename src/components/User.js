import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Bio from "./Bio";


function User() {
  return (
    <React.Fragment>
      <Container>
    
      <img class="img-thumbnail" src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/3/31/1427823466140/1fe69f2c-59d6-4e07-ab3a-8b60dbe35db2-1020x1020.jpeg?width=700&quality=85&auto=format&fit=max&s=488d904c14758c38d8010de62c742e4b" alt="user" width="200px" />
      <h1>Tom</h1>

      <ButtonGroup>
        <Button className="btn btn-outline-success" variant="light"  href="#">Tweets: 25</Button>
        <Button className="btn btn-outline-success" variant="light" href="#">Following: 10</Button>
        <Button className="btn btn-outline-success" variant="light" href="#">Followers: 2</Button>
      </ButtonGroup>
      <hr/ >
      <Bio/>
      </Container>
    </React.Fragment>
  );
}

export default User;