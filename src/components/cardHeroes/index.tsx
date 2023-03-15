import * as S from "./styles";

import { ICardHeroes } from "./ICardHeroes";

export const CardHeroes = ({ Heroes, image, handleClickCard }: ICardHeroes) => {
  return (
    <S.Content onClick={handleClickCard}>
      <S.ContentId>
        <S.HeroesId>ID do herói: {Heroes.id}</S.HeroesId>
        <S.CategoryId>categoria: {Heroes.category?.name}</S.CategoryId>
      </S.ContentId>
      <S.Image src={image} alt="heroi" />
      <S.Name>{Heroes.name}</S.Name>
      <S.Active active={Heroes.active}>
        {Heroes.active ? "ativo" : "desativado"}
      </S.Active>
    </S.Content>
  );
};
