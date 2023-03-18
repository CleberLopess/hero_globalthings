import { IHeroes } from "interfaces/IHeroes";

export interface IHero {
  handleClickEditedHero: (hero: IHeroes) => void;
  handleClickExcluedHero: () => void;
}
