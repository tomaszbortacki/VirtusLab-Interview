import { createStore } from "redux";
import { peopleReducer } from "./peopleReducer";

export const store = createStore(peopleReducer);
