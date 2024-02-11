import { getClient } from "@/lib/client";

export const TableClient = () => {
  const client = getClient();

  return (
    <div className="grid grid-cols-1 gap-1">
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          CPF/CNPJ: {client[0].identificator}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Nome: {client[0].fullname}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Telefone: {client[0].phone}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Registro: {client[0].clientRegister}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Rua: {client[0].address.street} - {client[0].address.housenumber}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Bairro: {client[0].address.neighborhood}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Cidade: {client[0].address.city}
        </div>
        <div className="border px-2 py-1 text-sm font-semibold dark:border-zinc-600 border-zinc-400">
          Estado: {client[0].address.state}
        </div>
      </div>
    </div>
  );
};
