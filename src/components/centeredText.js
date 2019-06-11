import React, {useState} from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function Text (props) {
  return (
    <Jumbotron fluid>
        <div>
            <h1>{props.title}</h1> 
        </div>
        <div>
            <p>{props.text}</p>
        </div>
    </Jumbotron>
  );
}