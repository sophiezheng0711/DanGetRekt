import React, {useState} from 'react';
import Text from "./centeredText";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

let count = 0;
const formStyle = {
  width : 20,
  marginLeft : "2200%"
};

class KeyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
    this.state = {
      value : '',
      disabled : false
    };
  }

  handleChange(event) {
    this.setState({ value : event.target.value });
  }

  handleSubmit(event) {
    if (!this.state.disabled) {
      if (this.props.answer === this.state.value.toUpperCase()) {
        count++;
        console.log(count);
        this.state.disabled = true;
        alert("Correct");
      }
      else {
        alert("NO");
      }
      event.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} style={formStyle}
        onChange={this.handleChange} disabled={this.state.disabled} />
          <br></br>
          <input type="submit" value=" " style={formStyle} />
      </form>
    );
  }
};

function RenderAnswer(props) {
  if (props.numCorrect === 13) {
    return (
      <div>
        <br></br>
        <h3><center>314159</center></h3>
      </div>
    );
  }
  else {
    return (
        <div>
          <br></br>
          <h3><center>The secret number will appear here.</center></h3>
        </div>
    );
  }
}

class App extends React.Component {
    constructor () {
        super();
        this.key = ['S', 'T', 'A', 'T', 'E', 'N', ' ',
                    'I', 'S', 'L', 'A', 'N', 'D'];        
        this.hints = [
          "***First Cipher***",
          "D - 12",
          "A - 2",
          "N - 5",
          "I - 7",
          "E - 4",
          "L - 9",
          "space - 6",
          "***Second Cipher***",
          "H - 0",
          "G - 1",
          "G - 3",
          "H - 8",
          "Z - 10",
          "M - 11"
        ];

    }

    render() {
        return (
          <div>
              <Text text="There are two ciphers, that is all. Guess each character and hit
                         the button below to see if that is the correct answer for that box.
                         Hint #1: find where they go. Hint #2: It's opposite day."
                   title="What is the WORST place on God's green Earth?"/>
              <Container>
                  <RenderAnswer numCorrect={(count)}/>
                  <Row>
                      {this.key.map((value) => (
                        <KeyForm answer={value} />
                      ))}
                  </Row>
              </Container>
              {this.hints.map((value) =>
                <h3><center>{value}</center></h3>
              )}
          </div>
        );
    }
}

export default function MoPuzzle () {
    return (
        <App />
    );
}