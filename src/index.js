import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtoolsPanel } from "react-query/devtools";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
    {/* <ReactQueryDevtoolsPanel  /> */}
  </QueryClientProvider>,
  document.getElementById("root")
);
