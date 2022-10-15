import { useContext } from "react";
import { Link } from "react-router-dom";
import { CreaturesContext } from "../../contexts/creatures";
import { ListCreatures } from "./styles";

function List() {
  const { creatures } = useContext(CreaturesContext);
  return (
    <ListCreatures>
      {creatures.map((creature) => (
        <li key={creature.name}>
          <Link to={`/${creature.race}`}>
            <h2>{creature.name}</h2>
            <img src={creature.image_url} alt={creature.name}></img>
          </Link>
        </li>
      ))}
    </ListCreatures>
  );
}

export default List;
