import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as S from "./styles";

export const AddedCatecory = () => {
  const router = useRouter();

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      category: "",
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((data) => {});

  return (
    <S.Content>
      <S.Title>Crie uma categoria</S.Title>
      <S.From>
        <S.ContentInput>
          <S.TitleInput>Digite o nome da nova categoria</S.TitleInput>
          <S.Input {...register("category")}></S.Input>
        </S.ContentInput>

        <S.ContentButtons>
          <S.ButtonSaved>Salvar</S.ButtonSaved>
          <S.ButtonCancel onClick={() => router.push("/")}>
            Cancelar
          </S.ButtonCancel>
        </S.ContentButtons>
      </S.From>
    </S.Content>
  );
};
