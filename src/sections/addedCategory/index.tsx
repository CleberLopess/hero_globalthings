import { CardCategory } from "components/cardCategory";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "store";
import { IAddedCategory } from "./IAddedCategory";
import * as S from "./styles";

export const AddedCatecory = ({
  dataCategory,
  excluedCategory,
}: IAddedCategory) => {
  const router = useRouter();
  const { category } = useSelector((state) => state);

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      category: "",
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((data) => {
    dataCategory(data.category);
  });

  const getCategory = useCallback(() => {
    return category.category.map((item) => {
      return (
        <CardCategory
          key={item.Id}
          category={item.Name}
          id={item.Id}
          handleClickDelete={() => excluedCategory(item.Id)}
        ></CardCategory>
      );
    });
  }, [category.category, excluedCategory]);

  return (
    <>
      <S.Content>
        <S.Title>Crie uma categoria</S.Title>
        <S.From onSubmit={handleSubmit(() => onSubmit())}>
          <S.ContentInput>
            <S.TitleInput>Digite o nome da nova categoria</S.TitleInput>
            <S.Input required {...register("category")}></S.Input>
          </S.ContentInput>

          <S.ContentButtons>
            <S.ButtonSaved type="submit">Salvar</S.ButtonSaved>
            <S.ButtonCancel onClick={() => router.push("/")}>
              Cancelar
            </S.ButtonCancel>
          </S.ContentButtons>
        </S.From>
        <S.ContentCardCategory>{getCategory()}</S.ContentCardCategory>
      </S.Content>
    </>
  );
};
