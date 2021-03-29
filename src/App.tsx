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
  const [numberOf, setNumberOf] = useState<number>(1);
  const [lock, setLock] = useState<boolean>(false);

  const people = useSelector<PeopleState, PeopleState["people"]>(
    (state) => state.people
  );

  const dispatch = useDispatch();

  const addPerson = async (personID: number) => {
    await axios
      .get(`${api}people/${personID}/`)
      .then((res) => res.data)
      .then((data) => {
        dispatch({
          type: "ADD_PERSON",
          payloads: {
            person: data,
          },
        });
        setLast(false);
      })
      .catch((err) => {
        console.log(err);
        setLast(true);
      });
  };

  const addPeople = async (number = 10) => {
    if (last) return;

    setLoading(true);

    const size = numberOf;

    for (let i = size; i < size + number; i++) await addPerson(i);
    setNumberOf(numberOf + number);

    setLoading(false);
  };

  useEffect(() => {
    addPeople();
  }, []);

  useEffect(() => {
    const loadOnScroll = async () => {
      const pageY = Math.ceil(window.pageYOffset + window.innerHeight);
      const scrollHeight = Math.ceil(document.documentElement.scrollHeight);

      if (pageY === scrollHeight && !lock) {
        setLock(true);
        await addPeople(5);
        setLock(false);
      }
    };

    window.addEventListener("wheel", loadOnScroll);
    return () => {
      window.removeEventListener("wheel", loadOnScroll);
    };
  }, [numberOf, lock]);

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
      </Container>
    </section>
  );
}

export default App;
