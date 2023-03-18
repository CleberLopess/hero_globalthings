export interface IHeroesState {
  heroes: IHeroes[];
  isLoading: boolean;
}

export interface IHeroes {
  Id?: string;
  Name?: string;
  Active?: boolean;
  Category?: string;
  CategoryId?: string;
}
