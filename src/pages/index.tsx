import { CardHeroes } from "components/cardHeroes";
import { ContentHeroes } from "sections/contentHeroes";
import { Header } from "sections/header";

const Home = () => {
  return (
    <div>
      <Header activeButtons />
      <ContentHeroes />
    </div>
  );
};

export default Home;
