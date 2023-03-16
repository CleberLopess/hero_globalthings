import { useRouter } from "next/router";
import { Header } from "sections/header";
import { Hero } from "sections/hero";

export const HeroesScreen = () => {
  const router = useRouter();
  const param = router?.query?.id;

  const dataHeroes = {
    active: true,
    categoryId: 0,
    id: 0,
    name: "heroi 01",
  };

  return (
    <>
      <Header activeButtons={false} />
      <Hero IDHero={param} />
    </>
  );
};
