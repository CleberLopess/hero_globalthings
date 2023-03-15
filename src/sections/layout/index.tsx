import React from "react";
import { ILayout } from "./ILayout";
import * as S from "./styled";

export const Layout = ({ children }: ILayout) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
