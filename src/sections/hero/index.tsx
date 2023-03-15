import { Modal } from "components/modal";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IHero } from "./IHero";
import * as S from "./styles";

export const Hero = ({ IDHero }: IHero) => {
  const [showModal, setShowModal] = useState(true);
  const router = useRouter();

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

  const handleClickCloseModal = () => {
    setShowModal(false);
  };

  const handleClickEditHero = () => {
    setShowModal(true);
  };

  const handleClickExclued = () => {};

  return (
    <>
      {showModal && (
        <Modal handleClose={handleClickCloseModal}>
          <S.ContentModal>
            <S.TitleForm>Editar herói</S.TitleForm>
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
              <S.ContentButtonsModal>
                <S.ButtonSaved type="submit">Salvar</S.ButtonSaved>
                <S.ButtonCancel onClick={handleClickCloseModal}>
                  Cancelar
                </S.ButtonCancel>
              </S.ContentButtonsModal>
            </S.Form>
          </S.ContentModal>
        </Modal>
      )}

      <S.Content>
        <S.ContentButtons>
          <S.ButtonEdited onClick={handleClickEditHero}>Editar</S.ButtonEdited>
          <S.ButtonExclued onClick={handleClickExclued}>
            Excluir
          </S.ButtonExclued>
        </S.ContentButtons>

        <S.Image
          src={`/images/heroi_0${Math.floor(Math.random() * 4)}.jpg`}
          alt="hero"
        ></S.Image>

        <S.Name>Herói 0</S.Name>
        <S.ContentDescriptions>
          <S.IDHero>ID do herói: 0</S.IDHero>
          <S.Category>Categoria: rapido</S.Category>
        </S.ContentDescriptions>
        <S.Tag active={true}>{true ? "ativo" : "desativado"}</S.Tag>
      </S.Content>
    </>
  );
};
