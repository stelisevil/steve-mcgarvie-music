import axios from "axios";

export const getDato = <T>(query: string): Promise<T> => {
  return axios("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
    },
    data: {
      query,
    },
  }).then((res) => res.data.data as T);
};
