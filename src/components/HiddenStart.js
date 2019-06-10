import React, {useState} from 'react';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import {Redirect, Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import MainApp from './App';

const hiddenB = {
    background: 'transparent',
    border: 'none',
    padding: '0',
  };


export default function App () {
  const [count, setCount] = useState(0);
  const renderRedirect = () => {
    // return <Redirect to='/realhome' />

    window.location = 'http://localhost:4242/realhome'
  };
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
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
      <div>
        {/* <Router>
            <Route path="/realhome" component={MainApp} />
        </Router> */}
        {/* <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                </ul>
                <Route path="/home" component={MainApp} />
            </div>
        </Router> */}
        Welcome! Your timer begins now.
        <br></br>
        Your journey has begun! To s
        <button style={hiddenB} onClick={renderRedirect}>tart</button>
        , the entrance must be found first. // TODO: fill in intro :D
      </div>
    </div>
  );
}