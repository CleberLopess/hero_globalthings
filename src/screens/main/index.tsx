import { useCallback, useEffect } from "react";
import { ContentHeroes } from "sections/contentHeroes";
import { Header } from "sections/header";

//redux
import { useDispatch } from "react-redux";
import { getHeroes } from "pages/api/heroes";
import { getCategory } from "pages/api/category";

//store
import { setHeroes } from "store/slices/heroes";
import { setCategory } from "store/slices/category";
import { IHeroes } from "../../store/interfaces/IHeroes";
import { ICategory } from "../../store/interfaces/ICategory";

const Main = () => {
  const dispatch = useDispatch();

  const getHero = useCallback(async () => {
    const heroes: IHeroes[] = await getHeroes();

    dispatch(setHeroes(heroes));
  }, [dispatch]);

  const getcategory = useCallback(async () => {
    const category: ICategory[] = await getCategory();

    dispatch(setCategory(category));
  }, [dispatch]);

  useEffect(() => {
    getHero();
    getcategory();
  }, [getHero, getcategory]);

  return (
    <>
      <Header activeButtons />
      <ContentHeroes />
    </>
  );
};

export default Main;
