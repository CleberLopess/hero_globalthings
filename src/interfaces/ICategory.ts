import { IHeroes } from "./IHeroes";

export interface ICategory {
  Id?: string;
  Name?: string;
  Heroes?: IHeroes[];
}
