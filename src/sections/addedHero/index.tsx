import * as S from "./styles";

import { ItemListHero } from "components/itemListHero";
import { Modal } from "components/modal";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export const AddedHero = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  const router = useRouter();

  useEffect(() => {
    setImage(`images/heroi_0${Math.floor(Math.random() * 4)}.jpg`);
  }, []);

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      category: "",
      actived: false,
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  const dataHeroes = {
    active: true,
    categoryId: 0,
    id: 0,
    name: "heroi 01",
  };

  const handleClickCloseModal = () => {
    setShowModal(false);
  };

  const handleClickAddedHero = () => {
    setShowModal(true);
  };

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
                <S.Input {...register("category")}></S.Input>
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
        <S.ContentList>
          <S.ItemList>
            <ItemListHero
              handleClickCard={() => {
                router.push(`heroi/${dataHeroes.id}`);
              }}
              Heroes={dataHeroes}
              image={image}
            />
          </S.ItemList>
        </S.ContentList>
      </S.Content>
    </>
  );
};
