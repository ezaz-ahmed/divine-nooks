import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "dda861cb2emsh3afb295adfcf880p1d943fjsn3b8c7d17cb16",
    },
  });

  return data;
};
