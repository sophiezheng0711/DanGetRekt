import React, {useState} from 'react';
import Draggable from 'react-draggable';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import TB from './centeredText.js';

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
        this.reset = this.reset.bind(this)
    }

    rotate() {
        let newRotation = this.state.angle + parseInt(this.state.rotation, 10);
        if(newRotation > 360 || newRotation < 0){
        newRotation %= 360;
        }
        this.state.angle = newRotation;
    }

    reset() {
        this.state.angle = 0
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <TB title='Programming Is Fun!' text='Welcome to my puzzle! Fill in the blanks to complete 
                        the hint by using the tool bar! 
                        Hint: You can always hear depressed *** *** students say "LMAO", 
                        but a part of the word is cut off since they must run to class, and sometimes reversed 
                        because they had only one hour of sleep and do not know what they are talking about. 
                        Some students love this phrase so much that they even use it when they program. 
                        They always say it when they complain to you, like "O, LMAO!" So you often ask 
                        yourself, what year is it?' />
                        {/* ANSWER: "BIG RED", "1996" */}
                    </Row>
                    <Row>
                        <Col><img src={require('./sp1.jpg')} alt='Background' /></Col>
                        <Col>
                            <br></br>
                            <div style={{color:'#126BDF', fontweight:'bold', fontSize:'28px', fontFamily:'Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif'}}>Tool Bar</div>
                            <br></br>
                            <div style={{color:'grey'}}>Drag the tools around the map to find hints!</div>
                            <br></br>
                            <Container>
                                <Row>
                                    <Draggable>
                                        <div><img style={{transform: `rotate(${this.state.angle}deg)`}} src={require('./scope.png')} alt='Scope' /></div>
                                    </Draggable>
                                </Row>
                                <br></br>
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
                                            Rotate
                                        </Button>
                                        &nbsp; &nbsp;
                                        <Button onClick={this.reset}>
                                            Reset
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