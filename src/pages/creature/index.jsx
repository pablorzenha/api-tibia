import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiCreature } from "../../services/api";
import { ContainerCreature } from "./styles";

function Creature() {
  const param = useParams();
  const { race } = param;
  const [creature, setCreature] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    ApiCreature.get(`/${race}`).then((response) =>
      setCreature(response.data.creature)
    );
  }, []);

  return (
    creature && (
      <ContainerCreature>
        <button onClick={() => navigate("/")}>Voltar</button>
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
      </ContainerCreature>
    )
  );
}

export default Creature;
