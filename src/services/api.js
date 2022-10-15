import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.tibiadata.com/v3/creatures",
});

export const ApiCreature = axios.create({
  baseURL: "https://api.tibiadata.com/v3/creature",
});
