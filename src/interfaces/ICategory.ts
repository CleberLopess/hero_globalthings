import { IHeroes } from "./IHeroes";

export interface ICategory {
  id: number;
  name: string;
  Heroes: IHeroes;
}
