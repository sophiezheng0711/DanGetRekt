import React, {useState} from 'react';

import Text from './centeredText.js';
import {Tabs, Tab, Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import Joe from "./joe-puzzle";

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

class Home extends React.Component {
    render () {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    <Text title="Welcome to the Intern's Puzzles!" text="Welcome to our intern puzzle page! We had 
                    a lot of fun with the boxes, and we wanted to make our own box. Unfortunately, we have absolutely
                    no woodworking skills, only programming skills. As you can see we had to make do with what we
                    had. To solve this puzzle set you must solve all four of our puzzles (in any order), take the sum
                    of all the answers (they should be numbers, so if you get words you're doing it wrong), and then
                    add ##### to the result. That number will be the combination to the lock puzzle. Good luck!"/>
                </Tab>
                <Tab eventKey="puzzle1" title="Joe's Puzzle" id="joesPuzzle">
                    <Joe />
                </Tab>
                <Tab eventKey="puzzle2" title="Sophie's Puzzle">
                    <SPuzzle />
                </Tab>
                <Tab eventKey="puzzle3" title="Mahamadou's Puzzle">
                    
                </Tab>
                <Tab eventKey="puzzle4" title="Nathan's Puzzle">
                    
                </Tab>
            </Tabs>
        );
    }
}

class Timer extends React.Component {
    render() {
     return (
      <div>
       <h1 style={{ fontSize: 40}}>{"Time elapsed: " + this.props.time + "s"}
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
          hasWon: false
        }
        this.toggleHidden = this.toggleHidden.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
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
                    <Home />
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