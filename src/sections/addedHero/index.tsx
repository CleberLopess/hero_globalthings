import * as S from "./styles";

import { ItemListHero } from "components/itemListHero";
import { Modal } from "components/modal";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useSelector } from "store";
import { postHeroes } from "services/heroes";

export const AddedHero = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { category, heroes } = useSelector((state) => state);

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      category: "",
      actived: false,
    },
  });

  const getOptionsCategory = () => {
    return category.category.map((item) => {
      return (
        <option key={item.Id} value={item.Name}>
          {item.Name}
        </option>
      );
    });
  };

  const { handleSubmit, register } = methods;

  const onSubmit = (data: any) => {
    console.log(data);

    const contentParam = {
      Name: data.name,
      Category: data.category,
      Active: data.actived,
    };

    postHeroes(contentParam);
  };

  const handleClickCloseModal = () => {
    setShowModal(false);
  };

  const handleClickAddedHero = () => {
    setShowModal(true);
  };

  const getListHero = useCallback(() => {
    return heroes.heroes.map((item) => {
      return (
        <S.ItemList key={item.Id}>
          <ItemListHero
            handleClickCard={() => {
              router.push(`heroi/${item.Id}`);
            }}
            Heroes={item}
            image={`images/heroi_0${Math.floor(Math.random() * 4)}.jpg`}
          />
        </S.ItemList>
      );
    });
  }, [heroes.heroes, router]);

  return (
    <>
      {showModal && (
        <Modal handleClose={handleClickCloseModal}>
          <S.ContentModal>
            <S.TitleForm>Adicionar um novo heŕoi</S.TitleForm>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
              <S.ContentInput>
                <S.TitleInput>Nome do herói</S.TitleInput>
                <S.Input {...register("name")} required></S.Input>
              </S.ContentInput>
              <S.ContentInput>
                <S.TitleInput>Categoria</S.TitleInput>
                <S.Select {...register("category")}>
                  {getOptionsCategory()}
                </S.Select>
              </S.ContentInput>
              <S.ContentInput>
                <S.TitleInput>herói ativo ?</S.TitleInput>
                <S.Input type={"checkbox"} {...register("actived")}></S.Input>
              </S.ContentInput>
              <S.ContentButtons>
                <S.ButtonSaved type="submit">Salvar</S.ButtonSaved>
                <S.ButtonCancel onClick={handleClickCloseModal}>
                  Cancelar
                </S.ButtonCancel>
              </S.ContentButtons>
            </S.Form>
          </S.ContentModal>
        </Modal>
      )}

      <S.Content>
        <S.ContentTitleAndButton>
          <S.TitleList>Lista de heŕois</S.TitleList>
          <S.ButtonAdded onClick={handleClickAddedHero}>
            Adicionar herói
          </S.ButtonAdded>
        </S.ContentTitleAndButton>
        <S.ContentList>{getListHero()}</S.ContentList>
      </S.Content>
    </>
  );
};
