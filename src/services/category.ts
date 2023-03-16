import requestAxios from "./api";

export const getCategory = async () => {
  try {
    const data = await requestAxios.get("/Category");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postCategory = async () => {
  try {
    const { data } = await requestAxios.post("/Category");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id: number) => {
  try {
    const { data } = await requestAxios.post(`/Category/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryById = async (id: number) => {
  try {
    const { data } = await requestAxios.get(`/Category/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const putCategory = async (id: number) => {
  try {
    const { data } = await requestAxios.get(`/Category/${id}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
