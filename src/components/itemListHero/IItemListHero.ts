import { IHeroes } from "../../interfaces/IHeroes";

export interface IItemListHero {
  image?: string;
  Heroes: IHeroes;
  handleClickCard: () => void;
}
