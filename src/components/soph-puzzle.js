import React, {useState} from 'react';
import Draggable from 'react-draggable';
import Img from 'react-image';

// puzzle2 is a pluggin in MainApp, therefore no navbar is needed.
// main components needed in puzzle2: a picture hung in the background;
// draggable scopes; a textbox prompting for the rotation of the scopes;
// and a textbox (with button) prompting for answer.


class App extends React.Component {
    render() {
        return (
            <div>
                <div><img src={process.env.PUBLIC_URL + 'clue2.jpg'} alt='clue2' /></div>
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