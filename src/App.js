import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./component/card-list/card-list.component.jsx";
import { SearchBox } from "./component/Searchbox/searchbox.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      SearchFeild: "",
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monster: user }));
  }
  handleEvent = (e) => {
    this.setState({ SearchFeild: e.target.value });
  };
  render() {
    const { monster, SearchFeild } = this.state;
    const filterMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(SearchFeild.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster App</h1>
        <SearchBox placeholder="Input here " handleChange={this.handleEvent} />
        {/* <input
          type="search"
          onChange={(e) => this.setState({ SearchFeild: e.target.value })}
        /> */}
        <CardList abc={filterMonster} />
      </div>
    );
  }
}
export default App;
