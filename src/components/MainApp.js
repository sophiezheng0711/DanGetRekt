import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Text from './centeredText.js';
import {Tabs, Tab, Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

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
                    <div>
                        // TODO: Temp placeholder.
                    </div>
                </Tab>
                <Tab eventKey="puzzle1" title="Joe's Puzzle" id="joesPuzzle">
                    <Text text="For those of you who do not know,
                    I absolutely love mathematics, and everything that has to do with the field.
                    That's why I am making my puzzle math based! If it was up to me I would have made it PDE
                    focused, but thats a little unfair. Oh well guess I'll have to settle for a number theory
                    problem instead. P.s: These numbers are a little big, it might be worthwhile to shrink
                    them into smaller pieces." title="Math, Numbers, and Algorithms" />
                </Tab>
                <Tab eventKey="puzzle2" title="Sophie's Puzzle">
                    
                </Tab>
                <Tab eventKey="puzzle3" title="Mahamadou's Puzzle">
                    
                </Tab>
                <Tab eventKey="puzzle4" title="Nathan's Puzzle">
                    <Text text="Small frogs sing silently."/>
                    <div>
                      Hello
                    </div>
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