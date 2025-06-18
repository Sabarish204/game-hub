import axios from "axios";
const isDev = import.meta.env.DEV;

export default axios.create({
  baseURL: isDev ? "/api/" : "https://api.rawg.io/api/",
  params: {
    key: "74a73354afd74100acc02d5f35b5a8ca",
  },
});
