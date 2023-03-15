import { IHeroes } from "./IHeros";

export interface ICategoryState {
  category: ICategory;
  isLoading: boolean;
}

export interface ICategory {
  id: string;
  name: string;
  Heroes?: IHeroes;
}
