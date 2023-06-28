import {USER, USERS} from "../../constants/actionTypes";

export const setUser = (userData) => ({
  type: USER.set,
  payload: userData,
});

export const deleteUser = () => ({
  type: USER.delete,
});

export const setUsersList = (payload) => ({
  type: USERS.get,
  payload
});