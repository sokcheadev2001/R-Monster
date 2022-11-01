import React from "react";
import { Component } from "react";
import CardBox from "../card-box/cardboxComponent";
import "./cardList.styles.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardBox monster={monster} key={monster.id} />;
        })}
      </div>
    );
  }
}
export default CardList;
