import { Client } from "@/lib/client";

export const TableClient = ({ client }: { client: Client }) => {
  return (
    <div className="grid grid-cols-1 gap-1">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          CPF/CNPJ: {client.identificator}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Nome: {client.fullname}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Telefone: {client.phone}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Registro: {client.clientRegister}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Rua: {client.address.street} - {client.address.housenumber}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Bairro: {client.address.neighborhood}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Cidade: {client.address.city}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Estado: {client.address.state}
        </div>
      </div>
    </div>
  );
};
