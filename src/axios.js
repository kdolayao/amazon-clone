import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-challenge-51c8a.cloudfunctions.net/api",
  // "http://localhost:5001/challenge-51c8a/us-central1/api",
});

export default instance;
