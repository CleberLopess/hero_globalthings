import { AddedHero } from "sections/addedHero";
import { Header } from "sections/header";

export const RegisterHeroScreen = () => {
  return (
    <>
      <Header activeButtons={false} />
      <AddedHero />
    </>
  );
};
