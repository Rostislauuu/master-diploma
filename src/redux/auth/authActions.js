import * as types from "./authActionTypes";

export const loginRequest = payload => ({
    type: types.LOGIN_REQUEST,
    payload
});