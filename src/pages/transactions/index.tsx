import type { ComponentProps } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { useDebounce } from "../../hooks/useDebounce";
import { useTransactions } from "../../hooks/useTransactions";
import { cn } from "../../utils/cn";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const [query, setQuery] = useDebounce("", 300);
  const { data, error, isPending } = useTransactions(query);

  if (error != null) {
    return <div>Ocorreu um erro.</div>;
  }

  return (
    <div>
      <Header />
      <Summary />

      <main className="w-full max-w-6xl mt-16 mx-auto px-6">
        <input
          type="search"
          className="w-full bg-gray-900 text-gray-300 rounded-md p-4 placeholder:text-gray-500"
          placeholder="Busque por transações"
          onChange={(e) => { setQuery(e.target.value); }}
        />
        {isPending ? (
          <p>Carregando...</p>
        ) : (
          <table className="w-full border-separate border-spacing-2 mt-6">
            <tbody>
              {data.map((t) => (
                <tr key={t.id}>
                  <Td width="50%">{t.description}</Td>
                  <Td>
                    <Price type={t.type} price={t.price} />
                  </Td>
                  <Td>{t.category}</Td>
                  <Td>{dateFormatter.format(new Date(t.createdAt))}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

interface PriceProps {
  type?: "income" | "expense";
  price: number;
}

function Price({ price, type = "income" }: PriceProps) {
  return (
    <span
      className={cn("font-bold", {
        "text-rose-800": type === "expense",
        "text-emerald-600": type === "income",
      })}
    >
      {type === "expense" && "-"} {priceFormatter.format(price)}
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
