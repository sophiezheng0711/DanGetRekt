import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import data from './data.json';

const fakeData = data.data.ranking

class TB extends React.Component {
    
    render () {
        const data = this.props.data;

        return (
            <div>
                <br></br>
                <div style={{color:'#126BDF', fontweight:'bold', fontSize:'28px', fontFamily:'Rockwell,"Courier Bold",Courier,Georgia,Times,"Times New Roman",serif'}}>
                    Here are our top 5 scorers!
                </div>
                <br></br>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>{fakeData[0].name}</td>
                        <td>{fakeData[0].time}</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>{fakeData[1].name}</td>
                        <td>{fakeData[1].time}</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>{fakeData[2].name}</td>
                        <td>{fakeData[2].time}</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>{fakeData[3].name}</td>
                        <td>{fakeData[3].time}</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>{fakeData[4].name}</td>
                        <td>{fakeData[4].time}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default function LBoard (props) {
    return (
        <TB data={props.data}/>
    );
}