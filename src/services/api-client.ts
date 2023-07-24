import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "969b55f58d80474dbf53ae725b952bb9",
  },
});
