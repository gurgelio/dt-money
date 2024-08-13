import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import type { PropsWithChildren, ReactElement } from "react";
import { cn } from "../utils/cn";

export function Summary() {
	return (
		<section className="w-full max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8 -mt-20">
			<SummaryCard
				title="Entradas"
				icon={<ArrowCircleUp className="text-emerald-600" size={32} />}
			>
				R$ 17.400,00
			</SummaryCard>
			<SummaryCard
				title="Saídas"
				icon={<ArrowCircleDown className="text-rose-800" size={32} />}
			>
				R$ 17.400,00
			</SummaryCard>
			<SummaryCard
				title="Total"
				className="bg-emerald-700"
				icon={<CurrencyDollar className="text-gray-100" size={32} />}
			>
				R$ 17.400,00
			</SummaryCard>
		</section>
	);
}

interface SummaryCardProps extends PropsWithChildren {
	title: string;
	icon: ReactElement;
	className?: string;
}

function SummaryCard({ title, icon, children, className }: SummaryCardProps) {
	return (
		<div className={cn("bg-gray-700 rounded-md p-8", className)}>
			<header className="flex items-center justify-between text-gray-400">
				<span>{title}</span>
				{icon}
			</header>
			<strong className="block mt-4 text-3xl">{children}</strong>
		</div>
	);
}
