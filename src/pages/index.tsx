import Main from "screens/main";
import { useDispatch } from "react-redux";
import { getHeroes } from "services/heroes";
import { getCategory } from "services/category";
import { useEffect } from "react";
import { setHeros } from "store/slices/heroes";
import { setCategory } from "store/slices/category";

const Home = ({ heroes, category }: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeros(heroes));
    dispatch(setCategory(category));
  }, [heroes, category, dispatch]);

  return <Main />;
};

export async function getServerSideProps() {
  const heroes = await getHeroes();
  const category = await getCategory();

  return { props: { heroes: heroes?.data, category: category?.data } };
}

export default Home;
