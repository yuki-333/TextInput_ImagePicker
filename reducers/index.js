import { combineReducers } from "redux";

import title from "./title";
import words from "./words"

export default combineReducers({
    title,
    words,
});