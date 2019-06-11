import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import CaroNum from "./caroselFull";

export default function Primes () {
    const elements = ["1","2"];
    return (
        <Carousel>
            {elements.map((value, index) => {
                return <Carousel.Item key={index}>
                        <img
                        className="d-block w-100"
                        src={require('./black.jpg')}
                        />
                        <Carousel.Caption>
                        <h1>{value}</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
            })}
        </Carousel>
    );
}