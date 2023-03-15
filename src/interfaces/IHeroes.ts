import { ICategory } from "./ICategory";

export interface IHeroes {
  id: number;
  name: string;
  active: boolean;
  categoryId: number;
  category?: ICategory;
}
