import axios from "axios";

export function fetchGameInfo() {
  return axios
    .get(
      `https://api.rawg.io/api/games/2050?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchData() {
  return axios
    .get(
      `https://api.rawg.io/api/games?dates=2020-01-01,2024-12-01&key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchCategories() {
  return axios
    .get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchSelectedGenre(genres) {
  return axios
    .get(
      `https://api.rawg.io/api/games?genres=${genres !== "RPG" ? genres.toLowerCase() : "role-playing-games-rpg"}&key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchGameById(id) {
  return axios
    .get(
      `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export function fetchPlaforms() {
  return axios 
  .get(`https://api.rawg.io/api/platforms/lists/parents?key=${import.meta.env.VITE_API_KEY}`)
  .then((response) => response.data.results)
  .catch((error) => console.error(error));

}