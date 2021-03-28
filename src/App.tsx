import React, { useEffect, useState } from "react";
import "./css/style.scss";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PeopleState } from "./peopleReducer";
import axios from "axios";
import api from "./api";
import Loading from "./components/Loading";
import Person from "./components/Person";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [last, setLast] = useState<boolean>(false);

  const people = useSelector<PeopleState, PeopleState["people"]>(
    (state) => state.people
  );

  const fetchPerson = async (ID: number) => {
    return await axios.get(`${api}people/${ID}/`).then((res) => res.data);
  };

  const dispatch = useDispatch();

  const addPerson = (personID: number) => {
    const person = fetchPerson(personID);

    person
      .then((data) => {
        dispatch({
          type: "ADD_PERSON",
          payloads: {
            person: data,
          },
        });
        setLast(false);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setLast(true);
      });
  };

  const addPeople = (number = 10) => {
    setLoading(true);
    for (let i = people.length + 1; i < people.length + number + 1; i++) {
      addPerson(i);
    }
  };

  useEffect(() => {
    addPeople();
  }, []);

  return (
    <section className="main">
      <Container>
        <section className="main__top">
          <h1>Star Wars Challenge</h1>
        </section>
        <section className="main__list">
          {people
            ? people.map((person, key) => {
                return <Person person={person} key={key} />;
              })
            : ""}
          {loading ? <Loading /> : ""}
        </section>
        <section className="main__bottom">
          {!last ? (
            <button
              onClick={() => {
                addPeople(5);
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
