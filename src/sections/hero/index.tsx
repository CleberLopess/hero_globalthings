import { Modal } from "components/modal";
import { IHeroes } from "interfaces/IHeroes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "store";
import { IHero } from "./IHero";
import * as S from "./styles";

export const Hero = ({ IDHero }: IHero) => {
  const [showModal, setShowModal] = useState(false);
  const { heroes } = useSelector((state) => state);
  const [heroCurrent, setHeroCurrent] = useState<IHeroes>();

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      category: "",
      actived: false,
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = (data: any) => {};

  const handleClickCloseModal = () => {
    setShowModal(false);
  };

  const handleClickEditHero = () => {
    setShowModal(true);
  };

  const handleClickExclued = () => {};

  useEffect(() => {
    const hero = heroes.heroes.find((item) => item.Id == IDHero);

    setHeroCurrent(hero);
  }, [IDHero, heroes, heroes.heroes]);

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

        <S.Name>{heroCurrent?.Name}</S.Name>
        <S.ContentDescriptions>
          <S.IDHero>ID do herói: {heroCurrent?.Id}</S.IDHero>
          {heroCurrent?.Category && (
            <S.Category>Categoria: {heroCurrent?.Category}</S.Category>
          )}
        </S.ContentDescriptions>
        <S.Tag active={heroCurrent?.Active}>
          {heroCurrent?.Active ? "ativo" : "desativado"}
        </S.Tag>
      </S.Content>
    </>
  );
};
