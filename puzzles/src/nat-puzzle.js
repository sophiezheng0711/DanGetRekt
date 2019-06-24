import React from "react";
import ReactDOM from "react-dom";

class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <div className="link">
        <a href="https://leetcode.com/problems/freedom-trail/">
          {" "}
          Squirrels and Snails{" "}
        </a>
      </div>
    );
  }
}

ReactDOM.render(<Problem />, document.getElementById("Problem"));
