import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
	return (
		<header className="bg-gray-900 pt-10 pb-28">
			<div className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center">
				<img src={igniteLogo} alt="" />
				<button
					type="button"
					className="h-12 bg-emerald-600 font-bold px-5 rounded-md cursor-pointer hover:transition-colors hover:bg-emerald-700"
				>
					Nova Transação
				</button>
			</div>
		</header>
	);
}
