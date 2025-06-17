import { QueryClient, QueryCache } from "react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 3_600_000,
    },
  },
});

export default queryClient
