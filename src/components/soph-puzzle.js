import React, {useState} from 'react';
import Draggable from 'react-draggable';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

// puzzle2 is a pluggin in MainApp, therefore no navbar is needed.
// main components needed in puzzle2: a picture hung in the background;
// draggable scopes; a textbox prompting for the rotation of the scopes;
// and a textbox (with button) prompting for answer.

class App extends React.Component {
    constructor () {
        super()
        this.state = {
          angle: 0,
          rotation: 0,
        }
        this.rotate = this.rotate.bind(this)
    }

    rotate() {
        let newRotation = this.state.angle + parseInt(this.state.rotation, 10);
        if(newRotation >= 360){
        newRotation =- 360;
        }
        this.state.angle = newRotation;
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col><img src={require('./sp1.jpg')} alt='Background' /></Col>
                        <Col>
                            <Container>
                                <Row>
                                    <Draggable>
                                        <div><img style={{transform: `rotate(${this.state.angle}deg)`}} src={require('./scope.png')} alt='Scope' /></div>
                                    </Draggable>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form>
                                            <Form.Group controlId='formAngle'>
                                                <Form.Label>Rotation Angle</Form.Label>
                                                <Form.Control type='angle' placeholder='Enter angle in degrees' onChange={e => this.state.rotation=e.target.value} />
                                                <Form.Text className="text-muted">
                                                    How many degrees clockwise would you like to rotate the scope?
                                                </Form.Text>
                                            </Form.Group>
                                        </Form>
                                        <Button onClick={this.rotate}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Container>
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