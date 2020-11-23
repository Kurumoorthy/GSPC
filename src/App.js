import React, { Component } from "react";
import GSPC from "./GSPC/GSPC";


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  render() {
    return (
      <div>
        <GSPC />
      </div>
    )
  }
}

export default App