import logo from "./logo.svg";
import "./App.css";
import React, { component } from "react";
import { Cardlist } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hardik",
      users: [{}],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .catch((reject) => console.log(reject))
      .then((promiseResult) => this.setState({ users: promiseResult }));
  }

  changeHandler = (e) => {    
    this.setState({searchField : e.target.value});
    console.log(e.target.value);
    console.log(this.state);
    
  }
  //Remember if we put 
  //onChangeHandler={this.changeHandler} ==> it binds the function
  //onChangeHandler={this.changeHandler()} ==> it invokes function immediately. and doesn't bind.
  //onChangeHandler={() => this.changeHandler()} ==> this binds the function. Same as option 1

  render() {        
    return (
      <div className="App">
        <h1> Monsters App </h1>
        <SearchBox placeholderText="Search User 123" onChangeHandler={(e) => this.changeHandler(e)} />
        <Cardlist users={this.state.users.filter(u=> this.state.searchField != '' ? u.name.toLowerCase().includes(this.state.searchField.toLowerCase()) : u )} />
      </div>
    );
  }
}

export default App;
