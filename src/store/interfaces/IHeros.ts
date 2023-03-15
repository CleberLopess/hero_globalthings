import { ICategory } from "./ICategory";

export interface IHerosState {
  heros: IHeroes;
  isLoading: boolean;
}

export interface IHeroes {
  id: string;
  name: string;
  active: boolean;
  category?: ICategory;
}
