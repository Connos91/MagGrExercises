import http from "lib/api";
import * as C from "./constants";

export const getPatientData = () => {
  const url = C.PATIET_QUERY_URL;
  return http.get(url);
};
