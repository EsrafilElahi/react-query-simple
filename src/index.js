import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtoolsPanel } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtoolsPanel initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);
