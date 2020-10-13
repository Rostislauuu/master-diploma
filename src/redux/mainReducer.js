import { combineReducers } from "redux"

import auth from "./auth/authReducer";
import lessons from "./lessons/lessonsReducer";
import tests from "./tests/testsReducer";
import groups from "./groups/groupsReducer";

const mainReducer = combineReducers({
    auth,
    lessons,
    tests,
    groups,
});

export default mainReducer;