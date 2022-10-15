import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const CreaturesContext = createContext({});

function CreaturesProvider({ children }) {
  const [creatures, setCreatures] = useState([]);
  useEffect(() => {
    api
      .get("")
      .then((response) => setCreatures(response.data.creatures.creature_list))
      .catch((err) => console.log(err));
  });
  return (
    <CreaturesContext.Provider value={{ creatures, setCreatures }}>
      {children}
    </CreaturesContext.Provider>
  );
}

export default CreaturesProvider;
