import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Transactions } from "./pages/transactions";
import "./tailwind.css";

const client = new QueryClient();

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <Transactions />
    </QueryClientProvider>
  </StrictMode>,
);
