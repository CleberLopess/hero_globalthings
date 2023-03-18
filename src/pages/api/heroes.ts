import { IHeroes } from "interfaces/IHeroes";
import requestAxios from "./api";

export const getHeroes = async () => {
  try {
    const { data } = await requestAxios.get("/Heroes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postHeroes = async (hero: IHeroes) => {
  try {
    const { data } = await requestAxios.post("/Heroes", {
      Name: hero.Name,
      Category: hero.Category,
      Active: hero.Active,
      CategoryId: hero.CategoryId,
    });
    alert("Herói criado com sucesso");

    return data;
  } catch (error) {
    alert("Erro ao criar herói");
    console.log(error);
  }
};

export const deleteHeroes = async (id: number) => {
  try {
    const { data } = await requestAxios.delete(`/Heroes/${id}`);

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

export const putHeroes = async (id: number, hero: IHeroes) => {
  try {
    const { data } = await requestAxios.put(`/Heroes/${id}`, {
      Name: hero.Name,
      Category: {
        Name: hero.Category,
      },
      Active: hero.Active,
      CategoryId: hero.CategoryId,
    });
    alert("Herói editado");
    return data;
  } catch (error) {
    alert("Erro ao editar herói");
    console.log(error);
  }
};
