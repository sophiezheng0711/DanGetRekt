import React from "react";
import ReactDOM from "react-dom";
import Text from "./centeredText";

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
          Eels and Eskeetilors{" "}
        </a>
        <div>
        <Text text="def snakesAndLadders(board):
        if not board:
            return 0

        oneDboard = list()

        #################################
        ##  Convert 2d list to 2d list ##
        #################################

        needtoswap = False
        for row in range(len(board) - 1, -1, -1):
            templist = []
            for col in range(0, len(board[0])):
                templist.append(board[row][col])

            if needtoswap:
                templist = templist[::-1]

            needtoswap = not needtoswap
            oneDboard.extend(templist)


        #########################################
        ##     Where the BFS takes place       ##
        #########################################

        curr_level = list()           #queue of board positions
        next_level = list()             
        curr_level.append(0)
        jump_counter = 0              # return value, tracks min number of jumps to get to end
        visited = dict()              # we put index into dict if we have visted it already

        while curr_level:      
            while curr_level:
                curr_position = curr_level[0]
                curr_level.pop(0)

                #when we reach the end of the board
                if curr_position == len(oneDboard) - 1:
                    return jump_counter

                #We can jump curr + 1, curr + 2 ... curr + 6, just like a dice roll
                for i in range(1, 7):
                    # doing this jump would put us out of bounds
                    if curr_position + i >= len(oneDboard):
                        continue

                    # calculating next jump from here
                    nextposition = 0
                    # if no snake/ladder
                    if oneDboard[curr_position + i] == -1:
                        nextposition = curr_position + i
                    # if we hit a snake/ladder
                    else:
                        nextposition = oneDboard[curr_position + i] - 1

                    # we don't want to do this move if we have already done it
                    if nextposition in visited:
                        continue
                    visited[nextposition] = True
                    next_level.append(nextposition)

            curr_level = next_level[:]
            jump_counter += 1
            next_level = list()

        return -1" title="Board">
     
    </Text>
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<Problem />, document.getElementById("Problem"));
export default function NPuzzle () {
  return (
      <Problem />
  );
}
