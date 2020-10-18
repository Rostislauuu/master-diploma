import { all, takeLatest } from "redux-saga/effects";

import * as types from "./authActionTypes";


// all sagas will be correct after api is ready
function *login() {
    // test saga
    console.log("hello");
};

export default function *() {
    yield all([
        yield takeLatest(types.LOGIN_REQUEST, login),
    ])
};