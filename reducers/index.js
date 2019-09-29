import { combineReducers } from "redux";

import title from "./title";
import words from "./todos"

export default combineReducers({
    title,
    words,
});