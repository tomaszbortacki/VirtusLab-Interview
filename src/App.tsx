import React, { useEffect, useState } from "react";
import "./css/style.scss";
import { Container } from "react-bootstrap";
import {
  PersonInterface,
  PeopleInterface,
  TitleInterface,
} from "./components/Interfaces";
import API from "./Api";
import Person from "./components/Person";
import Loading from "./components/Loading";
import axios from "axios";

type People = Array<PeopleInterface>;

function App() {
  const [last, setLast] = useState<boolean>(false);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  const [people, setPeople] = useState<People>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [titleBase, setTitleBase] = useState<TitleInterface>([]);

  const fetchPeopleData = async (number = 10) => {
    for (let i = numberOfPeople; i < numberOfPeople + number; i++) {
      await axios
        .get(`${API}people/${i}/`)
        .then((res) => {
          const { name, birth_year, gender, height, films } = res.data;
          const currentPerson: PersonInterface = {
            name,
            birth_year,
            gender,
            height,
            films,
          };
          setPeople((prevState) => [...prevState, currentPerson]);
          setLast(false);
        })
        .catch((err) => {
          setLast(true);
          console.error(err);
        });
    }
    setNumberOfPeople(numberOfPeople + number);
    setLoading(false);
  };

  useEffect(() => {
    fetchPeopleData();
  }, []);

  return (
    <section className="main">
      <Container>
        <section className="main__top">
          <h1>Star Wars Challenge</h1>
        </section>
        <section className="main__list">
          {people
            ? people.map((person: PersonInterface, key: number) => {
                return (
                  <Person
                    person={person}
                    key={key}
                    titleBase={titleBase}
                    setTitleBase={setTitleBase}
                  />
                );
              })
            : ""}
          {loading ? <Loading /> : ""}
        </section>
        <section className="main__bottom">
          {!last ? (
            <button
              onClick={() => {
                setLoading(true);
                fetchPeopleData(5);
              }}
            >
              <span>Load more (5)</span>
            </button>
          ) : (
            ""
          )}
        </section>
      </Container>
    </section>
  );
}

export default App;
