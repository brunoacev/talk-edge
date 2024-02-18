import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DataHistory = {
  operatorID: string;
  title: string;
  description: string;
  date: string;
};

export const TableHistory = ({ data }: { data: DataHistory[] }) => {
  return (
    <Table>
      <TableCaption>
        Historico de atendimento atualizado até 20/05/2022
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Operador</TableHead>
          <TableHead className="w-[250px]">Titulo</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead className="text-right">Data</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((content, idx) => (
          <TableRow key={idx}>
            <TableCell className="w-[150px] capitalize">
              {content.operatorID}
            </TableCell>
            <TableCell className="w-[250px] uppercase">
              {content.title}
            </TableCell>
            <TableCell className="tracking-wide">
              {content.description}
            </TableCell>
            <TableCell className="text-right">{content.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
