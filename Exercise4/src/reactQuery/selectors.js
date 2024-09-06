import { useQueryClient } from "@tanstack/react-query";
import * as C from "./constants";

const useGetPatientData = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData([C.PATIET_QUERY_KEY]);
};

export default {
  useGetPatientData,
};
