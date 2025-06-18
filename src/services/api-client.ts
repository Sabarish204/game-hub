import axios from "axios";

export default axios.create({
  baseURL: "/api/",
  params: {
    key: "74a73354afd74100acc02d5f35b5a8ca"
}
});