import React from "react";
import "./css/style.scss";
import { Container } from "react-bootstrap";
import { PersonIterface } from "./components/Interfaces";
import Person from "./components/Person";

interface People {
  [index: number]: PersonIterface;
}

const people: People = [
  {
    name: "name-test-1",
    birth_year: "birth-test-1",
    gender: "gender-test-1",
  },
  {
    name: "name-test-2",
    birth_year: "birth-test-2",
    gender: "gender-test-2",
  },
];

function App() {
  return (
    <section className="main">
      <Container>
        <section className="main__top">
          <h1>Star Wars Challange</h1>
        </section>
        <section className="main__list">
          {people.map((person: PersonIterface, key: number) => {
            return <Person id={key} person={person} key={key} />;
          })}
        </section>
        <section className="main__bottom">
          <button>
            <span>Load more (5)</span>
          </button>
        </section>
      </Container>
    </section>
  );
}

export default App;
