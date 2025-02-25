import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardTeam({ user }) {
  return (
    <div key={user.id} className="cardContainer">
      <div>
        <img src={user.avatar} alt={`Avatar ${user.name}`} />
      </div>
      <div className="userDetails">
        <h3 id="about3">{user.name}</h3>
        <ul className="listUser">
          <li>Age : {user.age} years old</li>
          <li>Description : {user.description}</li>
          <li>
            jeu préféré :{" "}
            <Link to={user.pageUrl} target="_blank" rel="noreferrer">
              {user.favoriteGame}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

CardTeam.propTypes = {
  user: PropTypes.string.isRequired,
};
