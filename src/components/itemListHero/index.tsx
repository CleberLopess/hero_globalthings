import * as S from "./styles";
import { IItemListHero } from "./IItemListHero";

export const ItemListHero = ({
  Heroes,
  image,
  handleClickCard,
}: IItemListHero) => {
  return (
    <S.Content onClick={handleClickCard}>
      <S.Image src={image} alt="hero"></S.Image>
      <S.ContentInfo>
        <S.NameHero>{Heroes.name}</S.NameHero>
        <S.ContentId>
          <S.IDHero>ID do herói: {Heroes.id}</S.IDHero>
          <S.IDCategory>categoria: {Heroes.category?.name}</S.IDCategory>
        </S.ContentId>
      </S.ContentInfo>
      <S.TagActived active={Heroes.active}>
        {Heroes.active ? "ativado" : "desativado"}
      </S.TagActived>
    </S.Content>
  );
};
