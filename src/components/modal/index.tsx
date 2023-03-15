import * as S from "./styles";
import { IModal } from "./IModal";

export const Modal = ({ children, handleClose }: IModal) => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.ButtonClose onClick={handleClose}>X</S.ButtonClose>
        {children}
      </S.Content>
    </S.Wrapper>
  );
};
