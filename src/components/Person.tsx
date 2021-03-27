import React, { useState } from "react";
import { PersonInterface, TitleInterface } from "./Interfaces";
import Loading from "./Loading";
import axios from "axios";

const Person = ({
  person,
  titleBase,
  setTitleBase,
}: {
  person: PersonInterface;
  titleBase: TitleInterface;
}) => {
  const { name, birth_year, gender, height, films } = person;
  const [personActive, setPersonActive] = useState<boolean>(false);
  const [titles, setTitles] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [end, setEnd] = useState<boolean>(false);

  const fetchPersonData = async () => {
    if (end || personActive) return;

    for (const film of films) {
      const exist: string = titleBase.reduce(
        (curr: string, { apiUrl, name }: { apiUrl: string; name: string }) =>
          apiUrl === film ? name : curr,
        ""
      );

      if (exist) setTitles((prevState) => [...prevState, exist]);
      else
        await axios
          .get(film)
          .then((res) => {
            const title = res.data.title;
            setTitleBase((prevState) => [
              ...prevState,
              { apiUrl: film, name: title },
            ]);
            setTitles((prevState) => [...prevState, title]);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    setEnd(true);
    setLoading(false);
  };

  return (
    <section className={personActive ? "person person--active" : "person"}>
      <ul
        className="person__basics"
        onClick={() => {
          setPersonActive(!personActive);
          fetchPersonData();
        }}
      >
        <li title={name}>{name}</li>
        <li title={birth_year}>{birth_year}</li>
        <li title={gender}>{gender}</li>
        <li>🡻</li>
      </ul>
      <section className="person__more">
        <ul>
          <li>Age: {birth_year.replace("BBY", "")}</li>
          <li>Height: {height}cm</li>
          <li>
            <div>
              Films <sup>({films.length})</sup>:{" "}
              {loading ? <Loading zoom={0.5} /> : ""}
            </div>
            <ul>
              {titles
                ? titles.map((title, key) => {
                    return <li key={key}>{title}</li>;
                  })
                : ""}
            </ul>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Person;
