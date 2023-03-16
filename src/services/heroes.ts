import requestAxios from "./api";
import { IPost } from "./interfaces/IHeroes";

export const getHeroes = async () => {
  try {
    const data = await requestAxios.get("/Heroes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postHeroes = async (post: IPost) => {
  try {
    const data = await requestAxios.post("/Heroes", {
      body: post,
    });

    console.log(data);

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
