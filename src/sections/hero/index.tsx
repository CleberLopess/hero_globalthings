import { Modal } from "components/modal";
import { IHeroes } from "interfaces/IHeroes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "store";
import { IHero } from "./IHero";
import * as S from "./styles";

export const Hero = ({
  handleClickEditedHero,
  handleClickExcluedHero,
}: IHero) => {
  const [showModal, setShowModal] = useState(false);
  const { heroes, category } = useSelector((state) => state);

  const getOptionsCategory = () => {
    return category.category.map((item) => {
      return (
        <S.Options key={item.Id} value={item.Name}>
          {item.Name}
        </S.Options>
      );
    });
  };

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
    const idCategory = category.category.find((item) => {
      if (item.Name === data.category) {
        return item.Id;
      }
    });

    const heroEdit: IHeroes = {
      Name: data.name,
      Id: heroes.heroes[0].Id,
      Category: data.category,
      Active: data.actived,
      CategoryId: idCategory?.Id,
    };

    handleClickEditedHero(heroEdit);
    setShowModal(false);
  };

  const handleClickCloseModal = () => {
    setShowModal(false);
  };

  const handleClickEditHero = () => {
    setShowModal(true);
  };

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
                <S.Select {...register("category")}>
                  {getOptionsCategory()}
                </S.Select>
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
          <S.ButtonExclued onClick={handleClickExcluedHero}>
            Excluir
          </S.ButtonExclued>
        </S.ContentButtons>

        <S.Image
          src={`/images/heroi_0${Math.floor(Math.random() * 4)}.jpg`}
          alt="hero"
        ></S.Image>

        <S.Name>{heroes.heroes[0]?.Name}</S.Name>
        <S.ContentDescriptions>
          <S.IDHero>ID do herói: {heroes.heroes[0]?.Id}</S.IDHero>
          <div>
            <S.IDCategory>
              ID da categoria: {heroes.heroes[0]?.CategoryId}
            </S.IDCategory>

            {heroes.heroes[0]?.Category && (
              <S.Category>Categoria: {heroes.heroes[0]?.Category}</S.Category>
            )}
          </div>
        </S.ContentDescriptions>
        <S.Tag active={heroes.heroes[0]?.Active}>
          {heroes.heroes[0]?.Active ? "ativo" : "desativado"}
        </S.Tag>
      </S.Content>
    </>
  );
};
