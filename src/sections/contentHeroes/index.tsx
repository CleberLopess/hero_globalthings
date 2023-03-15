import * as S from "./styles";
import { useRouter } from "next/router";
import { CardHeroes } from "components/cardHeroes";
import { useCallback, useEffect, useState } from "react";
import { IHeroes } from "interfaces/IHeroes";
import { useDispatch } from "react-redux";
import { useSelector } from "store";
import { getHeroes } from "services/heros";

export const ContentHeroes = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { heros } = useSelector((state) => state);
  const [herosData, setHerosData] = useState<IHeroes>();
  const [image, setImage] = useState("");

  const getHerosData = useCallback(async () => {
    await getHeroes();
  }, []);

  useEffect(() => {
    getHerosData();
  }, [getHerosData]);

  useEffect(() => {
    setImage(`images/heroi_0${Math.floor(Math.random() * 4)}.jpg`);
  }, []);

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
          image={image}
        />
      </S.Content>
    </S.Wrapper>
  );
};
