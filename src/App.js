import React, { Component } from "react";
import Show from "./component/Show";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name:
            "nhiem vu 111111111111111 11111111111 1111111111111111111111 11111 11111111111111111111111111",
          complete: false
        },
        {
          id: 2,
          name: "nhiem vu 2",
          complete: false
        },
        {
          name: "nhiem vu 3",
          complete: false
        },
        {
          name: "nhiem vu 4",
          complete: true
        },
        {
          name: "nhiem vu 5",
          complete: true
        }
      ]
    };
  }

  handleCompleteTask(index) {
    const cloneState = this.state.data;
    cloneState[index].complete = !cloneState[index].complete;

    this.setState(cloneState);
  }

  render() {
    return (
      <div className="App">
        <Show
          value={this.state.data}
          handleClick={(index) => this.handleCompleteTask(index)}
        />
      </div>
    );
  }
}
