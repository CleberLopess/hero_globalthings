import requestAxios from "./api";

export const getCategory = async () => {
  try {
    const { data } = await requestAxios.get("/Category");

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postCategory = async (category: string) => {
  try {
    const { data } = await requestAxios.post("/Category", {
      Name: category,
    });
    alert("Categoria criada com sucesso");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCategory = async (id: number) => {
  try {
    const { data } = await requestAxios.delete(`/Category/${id}`);
    alert("Categoria excluida com sucesso");
    return data;
  } catch (error) {
    console.log(error);
  }
};
