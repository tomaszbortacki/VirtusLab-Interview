import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PeopleState } from "../peopleReducer";
import Loading from "./Loading";
import axios from "axios";

interface PersonMoreInterface {
  age: string;
  height: string;
  films: string[];
}

const PersonMore = ({ age, height, films }: PersonMoreInterface) => {
  const moviesList = useSelector<PeopleState, PeopleState["movies"]>(
    (state) => state.movies
  );

  const [movies, setMovies] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  const fetchMovie = async (url: string) => {
    return await axios
      .get(url.replace("http:", window.location.protocol))
      .then((res) => res.data);
  };

  const loadMovies = async (url: string) => {
    setLoading(true);
    let exists: string = "";

    if (moviesList.length > 0) {
      exists = moviesList.reduce(
        (selected, curr) => (curr.path === url ? curr.name : selected),
        ""
      );
    }

    if (exists) {
      setLoading(false);
      setMovies((prevState: string[]) => [...prevState, exists]);
    } else {
      const movie = fetchMovie(url);

      movie
        .then((data) => {
          const title = data.title;

          dispatch({
            type: "ADD_MOVIE",
            payloads: {
              movie: {
                path: data.url,
                name: data.title,
              },
            },
          });
          setMovies((prevState: string[]) => [...prevState, title]);
        })
        .then(() => {
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    for (const url of films) loadMovies(url);
  }, []);

  return (
    <section className="person__more">
      <section className="person__desc">
        <h3>Age: {age}</h3>
        <h3>Height: {height}</h3>
        <h3>Films: {loading ? <Loading zoom={0.4} /> : ""}</h3>
        <ul>
          {movies
            ? movies.map((movie, key) => {
                return <li key={key}>{movie}</li>;
              })
            : ""}
        </ul>
      </section>
    </section>
  );
};

export default PersonMore;
