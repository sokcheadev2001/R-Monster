import CardBox from "../card-box/cardboxComponent";
import "./cardList.styles.css";
const CardList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardBox monster={monster} key={monster.id} />;
      })}
    </div>
  );
};
export default CardList;
