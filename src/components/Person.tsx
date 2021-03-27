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
  setTitleBase: any;
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
            setTitleBase((prevState: any) => [
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
        <li title={name}>
          <span>Name:</span>
          {name}
        </li>
        <li title={birth_year}>
          <span>Birth year</span>
          {birth_year}
        </li>
        <li title={gender}>
          <span>Gender:</span>
          {gender}
        </li>
        <li>
          <div>🡻</div>
        </li>
      </ul>
      <section className="person__more">
        <section className="person__desc">
          <h3>Age: {birth_year.replace("BBY", "")}</h3>
          <h3>Height: {height}cm</h3>
          <h3>Films:{loading ? <Loading zoom={0.4} /> : ""}</h3>
          <ul>
            {titles
              ? titles.map((title, key) => {
                  return <li key={key}>{title}</li>;
                })
              : ""}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Person;
