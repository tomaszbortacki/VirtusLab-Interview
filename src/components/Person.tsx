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
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512.171 512.171"
          >
            <g>
              <path
                d="M479.046,283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305,4.779,347.526,0,341.638,0H170.971
			c-5.888,0-10.667,4.779-10.667,10.667v266.667H42.971c-4.309,0-8.192,2.603-9.856,6.571c-1.643,3.989-0.747,8.576,2.304,11.627
			l212.8,213.504c2.005,2.005,4.715,3.136,7.552,3.136s5.547-1.131,7.552-3.115l213.419-213.504
			C479.793,292.501,480.71,287.915,479.046,283.925z"
              />
            </g>
          </svg>
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
