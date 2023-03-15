import requestAxios from "./api";

export const getCategory = async () => {
  const { data } = await requestAxios.get("/Category");

  return data;
};

export const postCategory = async () => {
  const { data } = await requestAxios.post("/Category");

  return data;
};

export const deleteCategory = async (id: number) => {
  const { data } = await requestAxios.post(`/Category/${id}`);

  return data;
};

export const getCategoryById = async (id: number) => {
  const { data } = await requestAxios.get(`/Category/${id}`);

  return data;
};

export const putCategory = async (id: number) => {
  const { data } = await requestAxios.get(`/Category/${id}`);

  return data;
};
