type Bills = {
  id: string;
  value: number;
  valueAt: number;
  dueDate: string;
  status: string;
};

type ClientNote = {
  fullname: string;
  id: string;
  phone: string;
  register: string;
};

type History = {
  operatorID: string;
  title: string;
  description: string;
  date: string;
};

interface Client {
  bills: Bills[];
  client: ClientNote;
  history: History[];
}

export const getClient = (): Client => {
  const bills = [
    {
      id: "FAT-0001",
      value: 150.35,
      valueAt: 253.56,
      dueDate: "10/01/2024",
      status: "Aberto",
    },
    {
      id: "FAT-0002",
      value: 150.35,
      valueAt: 2503.56,
      dueDate: "10/02/2024",
      status: "Processando",
    },
    {
      id: "FAT-0003",
      value: 150.35,
      valueAt: 1566.25,
      dueDate: "10/03/2024",
      status: "Pago",
    },
    {
      id: "FAT-0004",
      value: 150.35,
      valueAt: 53.56,
      dueDate: "10/04/2024",
      status: "Aberto",
    },
  ];
  const client = {
    fullname: "Bruno Azevedo Moraes",
    id: "999.999.999-08",
    phone: "(85) 99999-8888",
    register: "FFFDDD-GGG05",
  };
  const history = [
    {
      operatorID: "Bruno Azevedo",
      title: "Promessa Pagamento",
      description:
        "Cliente confirma pagamento da fatura 10/05 para o dia 10/06/2022",
      date: "20/05/2022 - 14:35",
    },
    {
      operatorID: "Bruno Azevedo",
      title: "Promessa Pagamento",
      description:
        "Cliente confirma pagamento da fatura 10/05 para o dia 10/06/2022",
      date: "20/05/2022 - 14:35",
    },
    {
      operatorID: "Bruno Azevedo",
      title: "Promessa Pagamento",
      description:
        "Cliente confirma pagamento da fatura 10/05 para o dia 10/06/2022",
      date: "20/05/2022 - 14:35",
    },
  ];

  return { bills, client, history };
};
