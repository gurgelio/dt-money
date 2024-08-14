import {
	type Dispatch,
	type SetStateAction,
	useCallback,
	useState,
} from "react";

export function useDebounce<T>(initialValue: T | (() => T), debounce: number) {
	const [state, setState] = useState(initialValue);
	const [timeoutId, setTimeoutId] = useState<number | null>(null);

	const debouncedSetState: Dispatch<SetStateAction<T>> = useCallback(
		(newState) => {
			if (timeoutId != null) {
				clearTimeout(timeoutId);
				setTimeoutId(null);
			}
			setTimeoutId(setTimeout(() => setState(newState), debounce));
		},
		[debounce, timeoutId],
	);

	return [state, debouncedSetState] as const;
}
