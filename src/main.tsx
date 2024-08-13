import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Transactions } from "./pages/transactions";
import "./tailwind.css";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<Transactions />
	</StrictMode>,
);
