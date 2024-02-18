import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Bills = {
  id: string;
  value: number;
  valueAt: number;
  dueDate: string;
  status: string;
};

export const TableBills = ({ data }: { data: Bills[] }) => {
  let initialValue = 0;
  data.map((value) => (initialValue += value.valueAt));

  return (
    <Table>
      <TableCaption>
        Lista completa de faturas emitidas até a data 20/05/2022
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">N° Fatura</TableHead>
          <TableHead className="w-[100px]">Valor</TableHead>
          <TableHead className="w-[100px]">Atualizado</TableHead>
          <TableHead className="w-[100px]">Vencimento</TableHead>
          <TableHead className="w-[100px] text-end">2° Via</TableHead>
          <TableHead className="w-[100px] text-end">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((bill, idx) => (
          <TableRow key={idx}>
            <TableCell className="w-[100px] uppercase">{bill.id}</TableCell>
            <TableCell className="w-[100px]">R$ {bill.value}</TableCell>
            <TableCell className="w-[100px]">R$ {bill.valueAt}</TableCell>
            <TableCell className="w-[100px]">{bill.dueDate}</TableCell>
            <TableCell className="text-end">
              <button className="border dark:border-green-800 font-semibold tracking-wider hover:bg-zinc-50 dark:text-zinc-50 px-6 py-1.5 rounded-md dark:hover:bg-green-500 transition-all duration-300 ease-in-out">
                Emitir
              </button>
            </TableCell>
            <TableCell className="w-[100px] text-end">{bill.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total</TableCell>
          <TableCell className="text-right">R$ {initialValue}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
