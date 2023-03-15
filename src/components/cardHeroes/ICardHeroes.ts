import { IHeroes } from "../../interfaces/IHeroes";

export interface ICardHeroes {
  image?: string;
  Heroes: IHeroes;
  handleClickCard: () => void;
}
