import { createStore } from "redux";
import { likesReducer } from "./reducers/globalReducers";

const store = createStore(likesReducer);

export default store;