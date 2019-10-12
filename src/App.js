import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

export default class App extends Component {
  state = {
    username: ""
  };

  change =(event)=>{
    this.setState ({
      username: event.target.value
    })

  }
  render() {
    const {change}= this
    const {username}=this.state

    return(
      <div>
        <UserInput change={change}/>
        <UserOutput username={username}/>
      </div>
    );
  }
}

