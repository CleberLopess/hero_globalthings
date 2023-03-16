import { IHeroes } from "./IHeroes";

export interface ICategoryState {
  category: ICategory[];
  isLoading: boolean;
}

export interface ICategory {
  Id?: string;
  Name?: string;
  Heroes?: IHeroes[];
}
