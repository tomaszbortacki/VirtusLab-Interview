export type PersonType = {
  name: string;
  birth_year: string;
  gender: string;
  height: string;
  films: string[];
};

export type MoviesType = {
  path: string;
  name: string;
};

export interface PeopleState {
  people: Array<PersonType>;
  movies: Array<MoviesType>;
}

const initalState = {
  people: [],
  movies: [],
};

type Action = {
  type: string;
  payloads: {
    person: PersonType;
    movie: MoviesType;
  };
};

export const peopleReducer = (
  state: PeopleState = initalState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_PERSON": {
      const {
        name,
        birth_year,
        gender,
        height,
        films,
      } = action.payloads.person;
      return {
        ...state,
        people: [
          ...state.people,
          {
            name,
            birth_year,
            gender,
            height,
            films,
          },
        ],
      };
    }
    case "ADD_MOVIE": {
      const { path, name } = action.payloads.movie;

      return {
        ...state,
        movies: [
          ...state.movies,
          {
            path,
            name,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
