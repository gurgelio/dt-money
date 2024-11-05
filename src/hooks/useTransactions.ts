import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

interface Transaction {
  category: string;
  createdAt: string;
  description: string;
  id: number;
  price: number;
  type: "income" | "expense";
}

export function useTransactions(query: string) {
  return useQuery({
    queryKey: ["transactions", query],
    queryFn: async () =>
      api
        .get("/transactions", {
          params: { q: query, _sort: "createdAt", _order: "desc" },
        })
        .then((r) => r.data as Transaction[]),
  });
}
