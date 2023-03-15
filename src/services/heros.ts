import requestAxios from "./api";

export const getHeros = async () => {
  const { data } = await requestAxios.get("/Heroes");

  return data;
};

export const postHeros = async () => {
  const { data } = await requestAxios.post("/Heroes");

  return data;
};

export const deleteHeros = async (id: number) => {
  const { data } = await requestAxios.post(`/Heroes/${id}`);

  return data;
};

export const getHerosById = async (id: number) => {
  const { data } = await requestAxios.get(`/Heroes/${id}`);

  return data;
};

export const putHeros = async (id: number) => {
  const { data } = await requestAxios.get(`/Heroes/${id}`);

  return data;
};
