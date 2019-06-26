import React from 'react';

import Text from './centeredText.js';
import {Tabs, Tab, Button, Form, Container, Modal, Row, Col} from 'react-bootstrap';
import Joe from "./joe-puzzle";
import SPuzzle from "./soph-puzzle";
import MoPuzzle from "./mo-puzzle";
import Primes from './primeNumberProblem.js';
import Notification from './notification.js';
import NPuzzle from './nat-puzzle';

const hiddenB = {
    background: 'transparent',
    border: 'none',
    padding: '0',
  };

function MemeHome (props) {
    return (
        <div>
            Welcome! Your timer begins now.
            <br></br>
            Your journey has begun! To s
            <button style={hiddenB} onClick={props.switch}>tart</button>
            , the entrance must be found first. // TODO: fill in intro :D
        </div>
    );
}

class BootStrapNavbar extends React.Component {
    render () {
        return (
            <div>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}><Timer time={this.props.time}/></div>
            </div>
        );
    }
}

class Timer extends React.Component {
    render() {
      let x = parseInt(this.props.time);
     return (
       <Container>
         <Row>
           <Col><img src={require('./pg.ico')} alt='Logo' /></Col>
           <Col xs={3}><Container><Row><Col><br></br></Col></Row><Row><h1 style={{color:'#126BDF', fontweight:'bold', fontSize: 28, fontFamily:'Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif'}}>{"DanGetRekt"}</h1></Row></Container></Col>
           <Col xs={8}>
            <h1 style={{ fontSize: 40}}>{"Time elapsed: " + ("0"+Math.floor(x/3600)).slice(-2) + ":" + ("0" + Math.floor(x/60)%60).slice(-2) + ":" + ("0"+x % 60).slice(-2)}
            </h1>
           </Col>
         </Row>
       </Container>
        );
      }
    }

class App extends React.Component {
    constructor () {
        super()
        this.state = {
          started: false,
          timerStarted: false,
          page1: true,
          time: 0,
          answer: '',
          hasWon: false,
          modalShow: false,
          residualTries: 5,
          hasLost: false,
          wrongAns: false
        }
        this.toggleHidden = this.toggleHidden.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.comp = this.comp.bind(this)
      }

      startTimer() {
        this.timer = setInterval(() => this.setState({
          time: this.state.time + 1
        }), 1000)
      }

      stopTimer() {
        clearInterval(this.timer)
      }

      toggleHidden () {
        this.setState({
          page1: !this.state.page1
        })
      }

      comp () {
        var passwordHash = require('password-hash');
        var hash = "sha1$86edbdae$1$dd71acb0ffd60f7e05b6133b4427e1b3aec0b4f5"
        
        if(passwordHash.verify(this.state.answer ,hash)){
          this.setState({modalShow:true});
          this.stopTimer();
        }
        else {
          this.setState({residualTries: this.state.residualTries - 1, wrongAns: true});
          this.stopTimer();
        }
        
      }
      render () {
        let modalClose = () => this.setState({ modalShow: false });
        let gameStarted = () => this.setState({started: true});
        let refreshPage = () => window.location.reload();
        let closeWrongAns = () => this.setState({wrongAns: false});
        if (this.state.started && !this.state.timerStarted) {
          this.startTimer();
          this.setState({timerStarted: true});
        };
        if (this.state.residualTries <= 0) this.state.hasLost = true;
        return (
            this.state.page1 ? (
                <div>
                    <Modal
                        show = {!this.state.started}
                        centered>
                      <Modal.Header>
                        <Modal.Title>DanGetRekt</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <p>Welcome to DanGetRekt, our puzzles page! Start the timer by clicking the start button, and let the games begin!</p>
                      </Modal.Body>

                      <Modal.Footer>
                        <Button onClick={gameStarted}>Start</Button>
                      </Modal.Footer>
                    </Modal>

                    <BootStrapNavbar time={this.state.time}/>
                    <div>
                        <MemeHome switch={this.toggleHidden}/>
                    </div>
                </div>
            ) : (<div>
                <BootStrapNavbar time={this.state.time}/>
                <div>
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                            <Text title="Welcome to the Intern's Puzzles!" text="Welcome to our intern puzzle page! We had 
                            a lot of fun with the boxes, and we wanted to make our own box. Unfortunately, we have absolutely
                            no woodworking skills, only programming skills. As you can see we had to make do with what we
                            had. To solve this puzzle set you must solve all four of our puzzles (in any order), and perform the
                            following operations: Add Mahamadou's answer with the product of Joe and Sophie's answers added
                            to Nathan's answer cubed. That number will the answer you place in the text box. Good luck!"/>
                            <Container>
                              <Form>
                                <Form.Group controlId='formAns'>
                                  <Form.Label>Your Answer</Form.Label>
                                  <Form.Control type='ans' placeholder='Enter answer' onChange={e => this.state.answer=e.target.value} />
                                  <Form.Text className="text-muted">
                                      Are you sure? You only have {this.state.residualTries} {(this.state.residualTries == 1) ? "try" : "tries"} left.
                                  </Form.Text>
                                </Form.Group>
                              </Form>
                              
                              <Button onClick={this.comp}>
                                  Submit
                              </Button>

                              <Modal
                                show = {this.state.wrongAns}
                                centered>
                              <Modal.Header>
                                <Modal.Title>Oops</Modal.Title>
                              </Modal.Header>

                              <Modal.Body>
                                <p>Wrong Answer! You have {this.state.residualTries} {(this.state.residualTries == 1) ? "try" : "tries"} left.</p>
                              </Modal.Body>

                              <Modal.Footer>
                                <Button onClick={closeWrongAns}>Continue</Button>
                              </Modal.Footer>
                            </Modal>

                              <Modal
                                show = {this.state.hasLost}
                                centered>
                              <Modal.Header>
                                <Modal.Title>Oops</Modal.Title>
                              </Modal.Header>

                              <Modal.Body>
                                <p>You have exceeded your limits! Try again next time.</p>
                              </Modal.Body>

                              <Modal.Footer>
                                <Button onClick={refreshPage}>Restart</Button>
                              </Modal.Footer>
                            </Modal>

                              <Notification
                                show={this.state.modalShow}
                                onHide={modalClose}
                              />
                            </Container>
                        </Tab>
                        <Tab eventKey="puzzle1" title="Joe's Puzzle" id="joesPuzzle">
                            <Joe />
                                
                            <Container>
                              <Primes />
                            </Container>
                        </Tab>
                        <Tab eventKey="puzzle2" title="Sophie's Puzzle">
                            <SPuzzle />
                        </Tab>
                        <Tab eventKey="puzzle3" title="Mahamadou's Puzzle">
                            <MoPuzzle />
                        </Tab>
                        <Tab eventKey="puzzle4" title="Nathan's Puzzle">
                            <NPuzzle />
                        </Tab>
                    </Tabs>
                </div>
            </div>
            )
        );
      }
}

export default function MainApp () {
  return (
    <App />
  );
}