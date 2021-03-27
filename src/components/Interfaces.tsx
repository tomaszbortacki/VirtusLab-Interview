interface PersonInterface {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  films: object;
}

interface PeopleInterface {
  [index: number]: PersonInterface;
}

export { PersonInterface, PeopleInterface };
