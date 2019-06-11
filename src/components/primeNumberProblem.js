import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import CaroNum from "./caroselFull";

export default function Primes () {
    const elements = ["92,842,061","\"156,839","844,118","3,337","21,229","989","84,098,626\"","11,122","968,208,014,697","989"];
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