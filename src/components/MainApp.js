import React, {useState} from 'react';
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
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">DanGetRekt!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Navbar>
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
                <Tab eventKey="puzzle1" title="Puzzle 1">
                    
                </Tab>
                <Tab eventKey="puzzle2" title="Puzzle 2">
                    
                </Tab>
                <Tab eventKey="puzzle3" title="Puzzle 3">
                    
                </Tab>
                <Tab eventKey="puzzle4" title="Puzzle 4">
                    
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