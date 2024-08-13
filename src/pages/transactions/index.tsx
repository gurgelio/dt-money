import { useQuery } from "@tanstack/react-query";
import type { ComponentProps, PropsWithChildren } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { cn } from "../../utils/cn";
import { SearchForm } from "./components/SearchForm";

interface Transaction {
	category: string;
	createdAt: Date;
	description: string;
	id: number;
	price: number;
	type: "income" | "expense";
}

export function Transactions() {
	const { data, error } = useQuery<Transaction[]>({
		queryKey: ["transactions"],
		queryFn: async () =>
			fetch("http://localhost:3333/transactions").then((r) => r.json()),
		initialData: [],
	});

	if (error != null) {
		return <div>Ocorreu um erro.</div>;
	}

	return (
		<div>
			<Header />
			<Summary />

			<main className="w-full max-w-6xl mt-16 mx-auto px-6">
				<SearchForm />
				<table className="w-full border-separate border-spacing-2 mt-6">
					<tbody>
						{data.map((t) => (
							<tr key={t.id}>
								<Td width="50%">{t.description}</Td>
								<Td>
									<Price type={t.type}>{t.price}</Price>
								</Td>
								<Td>{t.category}</Td>
								<Td>{t.createdAt.toString()}</Td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</div>
	);
}

interface PriceProps extends PropsWithChildren {
	type?: "income" | "expense";
}

function Price({ children, type = "income" }: PriceProps) {
	return (
		<span
			className={cn("font-bold", {
				"text-rose-800": type === "expense",
				"text-emerald-600": type === "income",
			})}
		>
			{type === "expense" ? "-" : ""} R$ {children}
		</span>
	);
}

function Td({ children, className, ...rest }: ComponentProps<"td">) {
	return (
		<td
			className={cn(
				"py-5 px-8 bg-gray-700 first:rounded-l-md last:rounded-r-md",
				className,
			)}
			{...rest}
		>
			{children}
		</td>
	);
}
