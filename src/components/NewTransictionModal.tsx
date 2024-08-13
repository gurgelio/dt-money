import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
	return (
		<Dialog.Portal>
			<Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black bg-opacity-75" />

			<Dialog.Content className="fixed min-w-96 rounded-md py-10 px-12 bg-gray-800 top-1/2 left-1/2 -translate-x-1/2 -transalate-y-1/2">
				<Dialog.Title>Nova Transação</Dialog.Title>
				<Dialog.Close className="absolute top-6 right-6">
					<X size={24} />
				</Dialog.Close>

				<form className="flex mt-8 flex-col gap-4 ">
					<input
						className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:gray-500"
						type="text"
						placeholder="Descrição"
						required={true}
					/>
					<input
						className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:gray-500"
						type="number"
						placeholder="Preço"
						required={true}
					/>
					<input
						className="rounded-md bg-gray-900 text-gray-300 p-4 placeholder:gray-500"
						type="text"
						placeholder="Categoria"
						required={true}
					/>

					<RadioGroup.Root className="grid grid-cols-2 gap-4 mt-2">
						<RadioGroup.Item
							value="income"
							className="bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md text-gray-300 transition-colors data-[state=unchecked]:hover:bg-gray-600 data-[state=checked]:bg-emerald-600 data-[state=checked]:text-white [&>svg]:data-[state=checked]:!text-white"
						>
							<ArrowCircleUp className="text-emerald-600" size={24} />
							Entrada
						</RadioGroup.Item>
						<RadioGroup.Item
							value="expense"
							className="bg-gray-700 p-4 flex items-center justify-center gap-2 rounded-md text-gray-300 transition-colors data-[state=unchecked]:hover:bg-gray-600 data-[state=checked]:bg-rose-800 data-[state=checked]:text-white [&>svg]:data-[state=checked]:!text-white"
						>
							<ArrowCircleDown className="text-rose-800" size={24} />
							Saída
						</RadioGroup.Item>
					</RadioGroup.Root>

					<button
						type="submit"
						className="h-14 bg-emerald-600 font-bold px-5 rounded-md mt-6 hover:bg-emerald-700 hover:transition-colors"
					>
						Criar
					</button>
				</form>
			</Dialog.Content>
		</Dialog.Portal>
	);
}
