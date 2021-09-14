import "./style.css";
function CharCard({ char: { name, image, status, species, gender } }) {
  name.length < 15
    ? (name = name.substring(0, 15))
    : (name = name.concat("..."));
  return (
    <div className="card">
      <h4
        style={{
          color: status === "Dead" ? "red" : "",
        }}
      >
        {name}
      </h4>
      <img
        style={{
          border: status === "Dead" ? "2px solid red" : "",
        }}
        className="photo"
        src={image}
        alt={name}
      ></img>
      <p>
        {species} - {gender}
      </p>
    </div>
  );
}

export default CharCard;
