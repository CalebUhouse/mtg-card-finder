import axios from "axios";

const cardApi = axios.create({
  baseURL: 'https://api.magicthegathering.io/v1',
});

export default cardApi;