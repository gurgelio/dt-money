import {
	ArrowCircleDown,
	ArrowCircleUp,
	CurrencyDollar,
	type IconProps,
} from "phosphor-react";
import type {
	ForwardRefExoticComponent,
	PropsWithChildren,
	RefAttributes,
} from "react";
import { useTransactions } from "../hooks/useTransactions";
import { cn } from "../utils/cn";
import { priceFormatter } from "../utils/formatter";

export function Summary() {
	const { data, error, isPending } = useTransactions("");

	if (error != null) {
		return <></>;
	}

	const incomes = isPending
		? 0
		: data
				.filter((t) => t.type === "income")
				.reduce((acc, t) => acc + t.price, 0);
	const expenses = isPending
		? 0
		: data
				.filter((t) => t.type === "expense")
				.reduce((acc, t) => acc + t.price, 0);

	return (
		<section className="w-full max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 -mt-20">
			<SummaryCard
				title="Entradas"
				Icon={ArrowCircleUp}
				iconColor="text-emerald-600"
			>
				{priceFormatter.format(incomes)}
			</SummaryCard>
			<SummaryCard
				title="Saídas"
				Icon={ArrowCircleDown}
				iconColor="text-rose-800"
			>
				{priceFormatter.format(expenses)}
			</SummaryCard>
			<SummaryCard
				title="Total"
				className="bg-emerald-700"
				iconColor="text-gray-100"
				Icon={CurrencyDollar}
			>
				{priceFormatter.format(incomes - expenses)}
			</SummaryCard>
		</section>
	);
}

interface SummaryCardProps extends PropsWithChildren {
	title: string;
	// biome-ignore lint/style/useNamingConvention: Icon is a component
	Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
	iconColor: string;
	className?: string;
}

function SummaryCard({
	title,
	Icon,
	iconColor,
	children,
	className,
}: SummaryCardProps) {
	return (
		<div className={cn("bg-gray-700 rounded-md p-8", className)}>
			<header className="flex items-center justify-between text-gray-400">
				<span>{title}</span>
				<Icon size={32} className={iconColor} />
			</header>
			<strong className="block mt-4 text-3xl">{children}</strong>
		</div>
	);
}
