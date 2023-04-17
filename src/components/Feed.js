import React from "react";
import Container from 'react-bootstrap/Container';
import Posts from './Posts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Feed(){
  return (
    <React.Fragment>
      <Container fluid>
      <form>
        <Row>
          <Col md={7}><input type="text" placeholder="What's Happening?" /></Col> 
          <Col md={2}><Button className="btn btn-outline-success" variant="light" size="sm" href="#">Submit</Button></Col>
        </Row>
      </form>
     <Posts />
      </Container>
    </React.Fragment>
  );
}

export default Feed;