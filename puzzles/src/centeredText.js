import React, {useState} from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

export default function Text (props) {
  return (
    <Container>
        <Jumbotron fluid>
            <Container>
                <h1>{props.title}</h1> 
            </Container>
            <Container>
                <p>{props.text}</p>
            </Container>
        </Jumbotron>
    </Container>
  );
}