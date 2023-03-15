import { FormProvider, useForm } from "react-hook-form";

import * as S from "./styles";

export const LoginPage = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const { handleSubmit, register } = methods;

  const onSubmit = handleSubmit((data) => {});

  return (
    <S.Wrapper>
      <S.Content>
        <S.Box>
          <S.Title>
            Entrar no HEROS <br />
          </S.Title>

          <S.Form onSubmit={onSubmit}>
            <S.ContentInput>
              <S.TitleInput>Usuário</S.TitleInput>
              <S.Input {...register("user")} placeholder="usuário"></S.Input>
            </S.ContentInput>

            <S.ContentInput>
              <S.TitleInput>Senha</S.TitleInput>
              <S.Input
                {...register("password")}
                placeholder="senha"
                type="password"
              ></S.Input>
            </S.ContentInput>
            <S.Button type="submit">Entrar</S.Button>
          </S.Form>
          <S.Continue href="/">Continuar sem usuário e senha</S.Continue>
        </S.Box>
      </S.Content>
    </S.Wrapper>
  );
};
