import * as S from "./styles";

import { ICardHeroes } from "./ICardHeroes";

export const CardHeroes = ({ Heroes, image, handleClickCard }: ICardHeroes) => {
  return (
    <S.Content onClick={handleClickCard}>
      <S.ContentId>
        <S.HeroesId>ID do herói: {Heroes.Id}</S.HeroesId>
        {Heroes.Category && (
          <S.CategoryId>categoria: {Heroes.Category?.name}</S.CategoryId>
        )}
      </S.ContentId>
      <S.Image src={image} alt="heroi" />
      <S.Name>{Heroes.Name}</S.Name>
      <S.Active active={Heroes.Active}>
        {Heroes.Active ? "ativo" : "desativado"}
      </S.Active>
    </S.Content>
  );
};
