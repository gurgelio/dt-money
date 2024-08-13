import { MagnifyingGlass } from "phosphor-react";

export function SearchForm() {
	return (
		<form className="flex gap-4">
			<input
				type="search"
				className="flex-1 bg-gray-900 text-gray-300 rounded-md p-4 placeholder:text-gray-500"
				placeholder="Busque por transações"
			/>
			<button
				type="submit"
				className="flex items-center gap-3 p-4 border text-emerald-400 border-emerald-400 font-bold rounded-md hover:bg-emerald-500 hover:border-emerald-500 hover:text-white hover:transition-colors"
			>
				<MagnifyingGlass size={20} /> Buscar
			</button>
		</form>
	);
}
