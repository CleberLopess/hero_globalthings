import * as S from "./styles";
import { useRouter } from "next/router";
import { CardHeroes } from "components/cardHeroes";

export const ContentHeroes = () => {
  const router = useRouter();

  const dataHeroes = {
    active: true,
    categoryId: 0,
    id: 0,
    name: "heroi 01",
  };
  return (
    <S.Wrapper>
      <S.Content>
        <CardHeroes
          handleClickCard={() => {
            router.push(`heroi/${dataHeroes.id}`);
          }}
          Heroes={dataHeroes}
          image={`images/heroi_0${Math.floor(Math.random() * 4)}.jpg`}
        />
      </S.Content>
    </S.Wrapper>
  );
};
