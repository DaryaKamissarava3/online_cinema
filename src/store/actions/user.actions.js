import {USER} from "../../constants/actionTypes";

export const setUser = (userData) => ({
  type: USER.set,
  payload:userData,
});