import React, {useState} from 'react';
import Draggable from 'react-draggable';

// puzzle2 is a pluggin in MainApp, therefore no navbar is needed.
// main components needed in puzzle2: a picture hung in the background;
// draggable scopes; a textbox prompting for the rotation of the scopes;
// and a textbox (with button) prompting for answer.


class App extends React.Component {
    render() {
        return (
            <div>
                <img src={require('./sp1.jpg')} alt='Logo' />
                <Draggable>
                    <div>I can now be moved around!</div>
                </Draggable>
            </div>
        );
    }
}

export default function Puzzle2 () {
    return (
        <App />
    );
}