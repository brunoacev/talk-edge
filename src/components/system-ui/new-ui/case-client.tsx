import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DataTable = {
  fullname: string;
  id: string;
  phone: string;
  register: string;

  adrress?: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  };
};

export const CaseClient = ({ data }: { data: DataTable }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>CPF / CNPF</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead>N° de Registro</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold">{data.id}</TableCell>
          <TableCell className="font-semibold">{data.fullname}</TableCell>
          <TableCell className="font-semibold">{data.phone}</TableCell>
          <TableCell className="font-semibold">{data.register}</TableCell>
        </TableRow>
      </TableBody>
      <TableHeader>
        <TableRow>
          <TableHead>Rua</TableHead>
          <TableHead>Bairro</TableHead>
          <TableHead>Cidade</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold">{`${
            data.adrress?.street || "Nenhuma informação"
          } - ${data.adrress?.number || "S/N"}`}</TableCell>
          <TableCell>
            {data.adrress?.neighborhood || "Nenhuma informação"}
          </TableCell>
          <TableCell className="font-semibold">
            {data.adrress?.city || "Nenhuma informação"}
          </TableCell>
          <TableCell className="font-semibold">
            {data.adrress?.state || "Nenhuma informação"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
