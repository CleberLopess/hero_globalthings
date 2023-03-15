import requestAxios from "./api";

export const getHeroes = async () => {
  try {
    const { data } = await requestAxios.get("/Heroes");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postHeroes = async () => {
  try {
    const { data } = await requestAxios.post("/Heroes");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteHeroes = async (id: number) => {
  try {
    const { data } = await requestAxios.post(`/Heroes/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getHeroesById = async (id: number) => {
  try {
    const { data } = await requestAxios.get(`/Heroes/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const putHeroes = async (id: number) => {
  try {
    const { data } = await requestAxios.get(`/Heroes/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
