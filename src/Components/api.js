import axios, { isCancel, AxiosError } from "axios";

const apiLink = axios.create({
  baseURL: "https://nc-marketplace-3-2ind.onrender.com/api",
});

export const fetchItems = (params) => {
  for (let key in searchParams.keys()) {
    console.log(key);
  }
  return apiLink
    .get("/items", { params: "" })
    .then(({ data: { items: itemsData } }) => {
      return itemsData;
    });
};
