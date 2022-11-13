// import { Component } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/cardListComponent";
import SearchBox from "./components/search-box/searchBoxComponent";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filtered, setFiltered] = useState(monsters);

  const searchMonster = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respone) => respone.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const Newfiltered = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFiltered(Newfiltered);
  }, [monsters, searchField]);

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
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((respone) => respone.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   searchMonster = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField: searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { searchMonster } = this;
//     const filtered = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={searchMonster}
//           placeholder="Search Monster"
//         />
//         <CardList monsters={filtered} />
//       </div>
//     );
//   }
// }

export default App;
