import CharCard from "../charCard";
import "./style.css";

function Characters({ charactersList }) {
  return (
    <div className="container">
      {charactersList.map((char) => (
        <CharCard key={char.id} char={char} />
      ))}
    </div>
  );
}
export default Characters;
