import Router from "next/router";
import { postHeroes, getHeroes } from "pages/api/heroes";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddedHero } from "sections/addedHero";
import { Header } from "sections/header";
import { IHeroes } from "store/interfaces/IHeroes";
import { setHeroes } from "store/slices/heroes";

export const RegisterHeroScreen = () => {
  const dispatch = useDispatch();

  const createHero = useCallback((hero: IHeroes) => {
    postHeroes(hero);
    Router.reload();
  }, []);

  const getHero = useCallback(async () => {
    const heroes: IHeroes[] = await getHeroes();

    dispatch(setHeroes(heroes));
  }, [dispatch]);

  useEffect(() => {
    getHero();
  }, [getHero]);

  return (
    <>
      <Header activeButtons={false} />
      <AddedHero handleCreateHero={createHero} />
    </>
  );
};
