import React, { Component } from "react";
import classNames from "classnames";
import checkBoxOn from "./images/check-box.svg";
import checkBoxOff from "./images/blank-check-box.svg";
import "./css/style.css";
export default class Show extends Component {
  render() {
    return (
      <div className="box">
        <h1>APP TO DO</h1>
        <div className="header">
          <img src={checkBoxOn} width={30} />
          <input className="boxSearch" type="search" placeholder="Tìm kiếm" />
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
                <img className="check" src={checkCheck} width={30} />{" "}
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
