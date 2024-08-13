import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Transactions } from "./pages/transactions";
import "./tailwind.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={client}>
			<Transactions />
		</QueryClientProvider>
	</StrictMode>,
);
