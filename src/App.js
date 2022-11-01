import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/cardListComponent";
import SearchBox from "./components/search-box/searchBoxComponent";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respone) => respone.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  searchMonster = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { searchMonster } = this;
    const filtered = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={searchMonster}
          placeholder="Search Monster"
        />
        <CardList monsters={filtered} />
      </div>
    );
  }
}

export default App;
