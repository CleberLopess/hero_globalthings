import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddedCatecory } from "sections/addedCategory";
import { Header } from "sections/header";
import { postCategory, getCategory, deleteCategory } from "pages/api/category";
import { setCategory, setNewCategory } from "store/slices/category";
import { ICategory } from "store/interfaces/ICategory";
import { useSelector } from "store";

export const RegisterCategoryScreen = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state);

  const pushCreateCategory = useCallback(
    async (newCategory: string) => {
      const data = await postCategory(newCategory);

      dispatch(setNewCategory(data));
    },
    [dispatch]
  );

  const handleExcluedCategory = useCallback(
    async (id: string) => {
      deleteCategory(parseInt(id));

      dispatch(setCategory(category.category.filter((item) => item.Id !== id)));
    },
    [category.category, dispatch]
  );

  const getcategory = useCallback(async () => {
    const category: ICategory[] = await getCategory();

    dispatch(setCategory(category));
  }, [dispatch]);

  useEffect(() => {
    getcategory();
  }, [getcategory]);

  return (
    <>
      <Header activeButtons={false} />
      <AddedCatecory
        dataCategory={pushCreateCategory}
        excluedCategory={(id) => handleExcluedCategory(id!)}
      />
    </>
  );
};
