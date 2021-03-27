interface PersonInterface {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  films: string[];
}

interface PeopleInterface {
  [index: number]: PersonInterface;
}

interface TitleInterface {
  [index: number]: {
    apiUrl: string;
    name: string;
  };
}

export { PersonInterface, PeopleInterface, TitleInterface };
