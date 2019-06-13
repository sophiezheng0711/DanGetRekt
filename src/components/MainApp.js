import React, {useState} from 'react';

import Text from './centeredText.js';
import {Tabs, Tab, Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import Joe from "./joe-puzzle";
import SPuzzle from "./soph-puzzle";
import MoPuzzle from "./mo-puzzle";
import { Container, Carousel} from 'react-bootstrap';
import Primes from './primeNumberProblem.js';

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
      <div>
       <h1 style={{ fontSize: 40}}>{"Time elapsed: " + ("0"+Math.floor(x/3600)).slice(-2) + ":" + ("0" + Math.floor(x/60)%60).slice(-2) + ":" + ("0"+x % 60).slice(-2)}
       </h1>
          </div>
        );
      }
    }

class App extends React.Component {
    constructor () {
        super()
        this.state = {
          page1: true,
          time: 0,
          answer: '',
          hasWon: false
        }
        this.toggleHidden = this.toggleHidden.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.comp = this.comp.bind(this)
        this.startTimer()
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
        console.log(this.state.answer);
      }
      render () {
        if (this.hasWon) {
            this.stopTimer()
        };
        return (
            this.state.page1 ? (
                <div >
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
                            had. To solve this puzzle set you must solve all four of our puzzles (in any order), take the sum
                            of all the answers (they should be numbers, so if you get words you're doing it wrong), and then
                            add ##### to the result. That number will be the combination to the lock puzzle. Good luck!"/>
                            <Form>
                              <Form.Group controlId='formAns'>
                                <Form.Label>Your Answer</Form.Label>
                                <Form.Control type='ans' placeholder='Enter answer' onChange={e => this.state.answer=e.target.value} />
                                <Form.Text className="text-muted">
                                    XD
                                </Form.Text>
                              </Form.Group>
                            </Form>
                            <Button onClick={this.comp}>
                                Submit
                            </Button>
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