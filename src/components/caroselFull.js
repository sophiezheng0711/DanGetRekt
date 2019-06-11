import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function CaroNum (props) {
  return (
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={require('./black.jpg')}
        />
        <Carousel.Caption>
        <h1>{props.number}</h1>
        </Carousel.Caption>
    </Carousel.Item>
  );
}