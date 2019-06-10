import React, {useState} from 'react';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

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
            </div>
        );
    }
}

class Parent extends React.Component {
    constructor () {
        super()
        this.state = {
          page1: true
        }
        this.toggleHidden = this.toggleHidden.bind(this)
      }
      toggleHidden () {
        this.setState({
          page1: !this.state.page1
        })
      }
      render () {
        if (this.state.page1) {
            return (
                <div >
                    <BootStrapNavbar />
                    <div>
                        <MemeHome switch={this.toggleHidden}/>
                    </div>
                </div>
                );
        }
        else {
            return (
                <div>
                    <BootStrapNavbar />
                    <div>// TODO: space for homepage</div>
                </div>
                );
        }
      }
}

export default function MainApp () {
  return (
    <Parent />
  );
}