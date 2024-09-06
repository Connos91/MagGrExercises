import { useQuery } from "@tanstack/react-query";
import * as C from "./reactQuery/constants";
import * as Q from "./reactQuery/queries";

const useDataFetcher = () => {
  return useQuery({
    queryKey: [C.PATIET_QUERY_KEY],
    queryFn: Q.getPatientData,
    ...C.CONFIG,
  });
};

export default useDataFetcher;
