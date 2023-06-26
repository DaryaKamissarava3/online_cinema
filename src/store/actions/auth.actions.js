import {AUTH} from "../../constants/actionTypes";

export const setAuthStatus=(status)=>({
  type:AUTH.setStatus,
  payload:status
});
