import './index.css'
import ReactDOM from "react-dom/client";
import AppRouter from "./routes";
import { AuthProvider } from "./store/auth";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./lib/query-client";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(

  <QueryClientProvider client={queryClient}>

    <AuthProvider>

        <AppRouter/>

    </AuthProvider>

    <ReactQueryDevtools initialIsOpen={false}/>

  </QueryClientProvider>
);