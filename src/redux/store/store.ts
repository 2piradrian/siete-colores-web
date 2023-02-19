import { createStore } from "redux";
import reducer from "./../reducers/combine";

const store = createStore(reducer);

export default store;
