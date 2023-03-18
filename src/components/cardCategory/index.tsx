import { ICardCategory } from "./ICardCategory";
import * as S from "./styles";

export const CardCategory = ({
  id,
  category,
  handleClickDelete,
}: ICardCategory) => {
  return (
    <S.Content>
      <S.ContentLabel>
        <S.Title>Categoria: {category}</S.Title>
        <S.ID>ID da categoria: {id}</S.ID>
      </S.ContentLabel>
      <S.ButtonDelete onClick={handleClickDelete}>Deletar</S.ButtonDelete>
    </S.Content>
  );
};
