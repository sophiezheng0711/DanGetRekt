import React from "react";
import {Button, ButtonToolbar, Container, Row, Col} from 'react-bootstrap';
import Text from "./centeredText";

class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  renderRedirect() {
    window.open('https://leetcode.com/problems/freedom-trail/');
  }

  render() {
    return (
      <div>
        <br></br>
        <div>
        <Text text="    int find_first_of(vector<int>& nums, int target){
        if(nums.size() == 0){ return -1; }
        
        int left = 0;  int right = nums.size() - 1;
        int returned = -1;
        
        while (left <= right){
            int med = (left + right) / 2;
            
            if (nums[med] == target){
                returned = med;
                right = med - 1;
            }
            else if (nums[med] < target){
                left = med + 1;
            }
            else{
                right = med - 1;
            }
        }
        
        return returned;
    }
    
    int find_last_of(vector<int>& nums, int target){
        if(nums.size() == 0){ return -1; }
        
        int left = 0;  int right = nums.size() - 1;
        int returned = -1;
        
        while (left <= right){
            int med = (left + right) / 2;
            
            if (nums[med] == target){
                returned = med;
                left = med + 1;
            }
            else if (nums[med] < target){
                left = med + 1;
            }
            else{
                right = med - 1;
            }
        }
        
        return returned;
    }
    
    vector<int> find_first_of_and_last_position_in_sorted_array(vector<int>& nums, int target) {
        vector<int> returned;
        
        returned.push_back(find_first_of(nums, target));
        returned.push_back(find_last_of(nums, target));
        
        return returned;
    }" title="Board">
     
    </Text>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <ButtonToolbar>
                <Button onClick={this.renderRedirect} block>
                  Eels and Eskeetilors
                </Button>
              </ButtonToolbar>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <br></br>
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
