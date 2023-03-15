import * as S from "./styles";
import { useRouter } from "next/router";
import { IHeader } from "./IHeader";

export const Header = ({ activeButtons }: IHeader) => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title onClick={() => router.push("/")}>HERÓIS</S.Title>
        {activeButtons && (
          <S.ContentButtons>
            <S.Button onClick={() => router.push("/register_hero")}>
              Cadastrar herói
            </S.Button>
            <S.Button onClick={() => router.push("/register_category")}>
              Cadastrar categoria
            </S.Button>
          </S.ContentButtons>
        )}
      </S.Content>
    </S.Wrapper>
  );
};
