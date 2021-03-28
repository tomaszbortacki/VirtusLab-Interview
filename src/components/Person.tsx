import React, { useState } from "react";
import { PersonType } from "../peopleReducer";
import PersonMore from "./PersonMore";

const Person = ({ person }: { person: PersonType }) => {
  const { name, birth_year, gender, height, films } = person;

  const [active, setActive] = useState<boolean>(false);
  const [loadMore, setLoadMore] = useState<boolean>(false);

  return (
    <section className={active ? "person person--active" : "person"}>
      <ul
        className="person__basics"
        onClick={() => {
          setActive(!active);
          setLoadMore(true);
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
      {loadMore ? (
        <PersonMore
          age={birth_year.replace("BBY", "")}
          height={`${height}cm`}
          films={films}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default Person;
