import { useRouter } from "next/router";
import { Header } from "sections/header";
import { Hero } from "sections/hero";

export const HeroesScreen = () => {
  const router = useRouter();
  const param = router?.query?.id;

  return (
    <>
      <Header activeButtons={false} />
      <Hero IDHero={param} />
    </>
  );
};
