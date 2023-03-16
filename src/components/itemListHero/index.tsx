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
        <S.NameHero>{Heroes.Name}</S.NameHero>
        <S.ContentId>
          <S.IDHero>ID do herói: {Heroes.Id}</S.IDHero>
          <S.IDCategory>categoria: {Heroes.Category}</S.IDCategory>
        </S.ContentId>
      </S.ContentInfo>
      <S.TagActived active={Heroes.Active}>
        {Heroes.Active ? "ativado" : "desativado"}
      </S.TagActived>
    </S.Content>
  );
};
