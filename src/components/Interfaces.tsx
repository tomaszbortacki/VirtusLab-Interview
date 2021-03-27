export interface PersonInterface {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  films: string[];
}

export interface PeopleInterface {
  [index: number]: PersonInterface;
}

export interface TitleInterface {
  [index: number]: {
    apiUrl: string;
    name: string;
  };
  reduce: any;
}
