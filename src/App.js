import logo from "./logo.svg";
import "./App.css";
import React, { component } from "react";
import {Cardlist} from './Components/card-list/card-list.component';

import { unstable_renderSubtreeIntoContainer } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hardik",
      users: [{}],
    };
  }

  componentDidMount() {  

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .catch((reject) => console.log(reject))
      .then((promiseResult) => this.setState({ users: promiseResult }));
  }

  render() {
    return (
      <div className="App">
        <Cardlist users={this.state.users} />
      </div>
    );
  }
}

export default App;
