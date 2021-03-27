import React, { useState } from "react";
import { PersonInterface } from "./Interfaces";

const Person = (props: { id: number; person: PersonInterface }) => {
  const { name, birth_year, gender, height, films } = props.person;
  const [personActive, setPersonActive] = useState<boolean>(false);

  return (
    <section className={personActive ? "person person--active" : "person"}>
      <ul
        className="person__basics"
        onClick={() => setPersonActive(!personActive)}
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
            Films:
            <ul>
              <li>Film title 1</li>
              <li>Film title 2</li>
            </ul>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Person;
