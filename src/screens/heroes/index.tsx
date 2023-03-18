import { IHeroes } from "interfaces/IHeroes";
import { useRouter } from "next/router";
import { deleteHeroes, getHeroesById, putHeroes } from "pages/api/heroes";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "sections/header";
import { Hero } from "sections/hero";
import { setHeroes } from "store/slices/heroes";

export const HeroesScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const getHeroById = useCallback(async () => {
    const hero = await getHeroesById(parseInt(id as string));

    dispatch(setHeroes([hero]));
  }, [id, dispatch]);

  const excludeHero = useCallback(async () => {
    try {
      deleteHeroes(parseInt(id as string));
      router.push("/");
      alert("Herói excluido");
    } catch (error) {
      alert("Erro ao excluir herói");
    }
  }, [id, router]);

  const editedHero = useCallback(
    async (hero: IHeroes) => {
      try {
        await putHeroes(parseInt(id as string), hero);
        // router.reload();
      } catch (error) {}
    },
    [id]
  );

  useEffect(() => {
    getHeroById();
  }, [getHeroById]);

  return (
    <>
      <Header activeButtons={false} />
      <Hero
        handleClickEditedHero={(hero) => editedHero(hero)}
        handleClickExcluedHero={excludeHero}
      />
    </>
  );
};
