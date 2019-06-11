import React, {useState} from 'react';
import Draggable from 'react-draggable';
import {Container, Row, Col} from 'react-bootstrap';

// puzzle2 is a pluggin in MainApp, therefore no navbar is needed.
// main components needed in puzzle2: a picture hung in the background;
// draggable scopes; a textbox prompting for the rotation of the scopes;
// and a textbox (with button) prompting for answer.

const top = {
    position: 'absolute',
  };

class App extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><img src={require('./sp1.jpg')} alt='Logo' /></Col>
                        <Col>
                            <Draggable>
                                <div style={top}>I can now be moved around!</div>
                            </Draggable>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default function SPuzzle () {
    return (
        <App />
    );
}