import logo from "./logo.svg";
import "./App.css";
import React, { component } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hardik",
      projects: [{}]
    };
  }

  componentDidMount() {
    this.setState({
      projects: [
        {
          name: "TNT-FedEx-1",
          id: 1,
        },
        {
          name: "XPO-1",
          id: 2,
        },
        {
          name: "Microsoft-1",
          id: 3,
        }
      ]
    });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .catch((reject) =>console.log(reject))
      .then((promiseResult) => this.setState({ projects: promiseResult }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {this.state.name}</p>
          <h1>Project</h1>

          {this.state.projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
