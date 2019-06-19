import React from 'react';
import Draggable from 'react-draggable';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TB from './centeredText.js';

class App extends React.Component {
    constructor () {
        super()
        this.state = {
          angle: 0,
        }
        this.rotate5 = this.rotate5.bind(this)
        this.rotate10 = this.rotate10.bind(this)
        this.rotate20 = this.rotate20.bind(this)
        this.rotate90 = this.rotate90.bind(this)
        this.reset = this.reset.bind(this)
    }

    rotate5() {
        let newRotation = this.state.angle + 5;
        if(newRotation > 360 || newRotation < 0){
        newRotation %= 360;
        }
        this.setState({angle: newRotation});
    }

    rotate10() {
        let newRotation = this.state.angle + 10;
        if(newRotation > 360 || newRotation < 0){
        newRotation %= 360;
        }
        this.setState({angle: newRotation});
    }

    rotate20() {
        let newRotation = this.state.angle + 20;
        if(newRotation > 360 || newRotation < 0){
        newRotation %= 360;
        }
        this.setState({angle: newRotation});
    }
    rotate90() {
        let newRotation = this.state.angle + 90;
        if(newRotation > 360 || newRotation < 0){
        newRotation %= 360;
        }
        this.setState({angle: newRotation});
    }

    reset() {
        this.setState({angle: 0});
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
                        They always say it when they complain to you, like "O, LMAO!" (Hint2: answer is 4 digits)' />
                    </Row>
                    <br></br>
                    <Row>
                        <br></br>
                        <Container>
                            <Row>
                                <div style={{color:'#126BDF', fontweight:'bold', fontSize:'28px', fontFamily:'Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif'}}>Tool Bar</div>
                            </Row>
                            <Row>
                            <div style={{color:'grey'}}>Drag the tools around the map to find hints! You could also rotate the scopes.</div>
                            </Row>
                            <br></br>
                            <Row>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Button onClick={this.rotate5}>
                                                Rotate 5 degrees
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button onClick={this.rotate10}>
                                                Rotate 10 degrees
                                            </Button>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col>
                                            <Button onClick={this.rotate20}>
                                                Rotate 20 degrees
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button onClick={this.rotate90}>
                                                Rotate 90 degrees
                                            </Button>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <Col>
                                            <Button onClick={this.reset}>
                                                Reset
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                        <br></br>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><img src={require('./sp1.png')} alt='Background' /></Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Container>
                            <Row>
                                <Col>
                                    <Draggable>
                                        <div><img style={{transform: `rotate(${this.state.angle}deg)`}} src={require('./scope1.png')} alt='Scope' /></div>
                                    </Draggable>
                                </Col>
                                <Col>
                                    <Draggable>
                                        <div><img style={{transform: `rotate(${this.state.angle}deg)`}} src={require('./scope2.png')} alt='Scope' /></div>
                                    </Draggable>
                                </Col>
                            </Row>
                        </Container>
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
