import React, { Component } from "react";
import classNames from "classnames";
import checkBoxOn from "./images/check-box.svg";
import checkBoxOff from "./images/blank-check-box.svg";
import "./css/style.css";
export default class Show extends Component {
  eventOnKey = (event) => {
    if (event.keyCode === 13) {
      let text = event.target.value;
      this.setState({
        data: [
          {
            name: text,
            complete: false
          },
          ...this.props.value
        ]
      });
    }
  };
  render() {
    return (
      <div className="box">
        <h1>APP TO DO</h1>
        <div className="header">
          <img src={checkBoxOn} width={30} alt="todo-app" />
          <input
            onKeyUp={this.eventOnKey}
            className="boxSearch"
            type="search"
            placeholder="Thêm mới"
          />
        </div>
        <ul>
          {this.props.value.map((item, index) => {
            let checkCheck = checkBoxOff;
            if (item.complete) {
              checkCheck = checkBoxOn;
            }
            return (
              <li
                key={index.toString()}
                className={classNames("list", { xlist: item.complete })}
                onClick={() => this.props.handleClick(index)}
              >
                <img
                  className="check"
                  src={checkCheck}
                  width={30}
                  alt="todo-app"
                />
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
