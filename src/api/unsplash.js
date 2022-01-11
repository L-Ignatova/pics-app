import axios from "axios";

const ROOT_URL = `https://api.unsplash.com`;

export default axios.create({
  baseURL: ROOT_URL,
  headers: {
    Authorization: `Client-ID DCmeL44GUCSGoplySK6jRphUH0mQEZXD2ITbgBd_W7c`
  },
});