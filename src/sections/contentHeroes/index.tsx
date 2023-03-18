import * as S from "./styles";
import { useRouter } from "next/router";
import { CardHeroes } from "components/cardHeroes";
import { useSelector } from "store";
import { useCallback } from "react";

export const ContentHeroes = () => {
  const { heroes } = useSelector((state) => state);
  const router = useRouter();

  const getListHeroes = useCallback(() => {
    return heroes?.heroes?.map((item) => {
      return (
        <CardHeroes
          key={item.Id}
          handleClickCard={() => {
            router.push(`heroi/${item.Id}`);
          }}
          Heroes={item}
          image={`images/heroi_0${Math.floor(Math.random() * 4)}.jpg`}
        />
      );
    });
  }, [heroes?.heroes, router]);

  return (
    <S.Wrapper>
      <S.Content>{getListHeroes()}</S.Content>
    </S.Wrapper>
  );
};
