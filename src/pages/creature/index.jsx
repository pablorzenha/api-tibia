import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiCreature } from "../../services/api";

function Creature() {
  const param = useParams();
  const { race } = param;
  const [creature, setCreature] = useState();

  useEffect(() => {
    ApiCreature.get(`/${race}`).then((response) =>
      setCreature(response.data.creature)
    );
  }, []);

  return (
    creature && (
      <div>
        <h1>{creature.name}</h1>
        <img src={creature.image_url} alt={creature.name}></img>
        <h2>Health</h2>
        <p>{creature.hitpoints}</p>
        <h2>Imune contra:</h2>
        {creature.immune ? (
          creature.immune.map((imuneElem) => <p>{imuneElem}</p>)
        ) : (
          <p>Não existe imunidade contra nenhum elemento.</p>
        )}
        <h2>Forte contra:</h2>
        {creature.strong ? (
          creature.strong.map((strongElem) => <p>{strongElem}</p>)
        ) : (
          <p>Não existe força contra nenhum elemento.</p>
        )}
        <h2>Fraqueza contra:</h2>
        {creature.weakness ? (
          creature.weakness.map((weakElem) => <p>{weakElem}</p>)
        ) : (
          <p>Não existe fraqueza contra nenhum elemento.</p>
        )}
      </div>
    )
  );
}

export default Creature;
