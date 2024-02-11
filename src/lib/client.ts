export type ClientBillsType = {
  id: string;
  originalValue: number;
  updateValue: number;

  dueDate: string;
  status: "Pago" | "Aberto" | "Processando";
};

export type ClientHistoryType = {
  id: string;
  operator: string;
  description: string;

  createAt: string;
};

type Address = {
  street: string;
  housenumber: string;
  neighborhood: string;
  city: string;
  state: string;
};

export interface IClient {
  id: string;

  fullname: string;
  identificator: string;
  phone: string;
  clientRegister: string;

  address: Address;

  bills?: ClientBillsType[];
  history?: ClientHistoryType[];
}

const ClientDB: IClient[] = [
  {
    id: "00001",
    fullname: "Bruno Azevedo Moraes",
    identificator: "000.000.000-99",
    phone: "(99) 99999-8888",
    clientRegister: "6999-FF4",

    address: {
      street: "Porto dos Sonhos",
      housenumber: "50",
      neighborhood: "Aldeota",
      city: "Fortaleza",
      state: "Ceará",
    },

    bills: [
      {
        id: "11111111-99",
        originalValue: 99.57,
        updateValue: 2060.38,
        dueDate: "20/10/2020",
        status: "Aberto",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
      {
        id: "11111111-99",
        originalValue: 145.89,
        updateValue: 3068.81,
        dueDate: "20/10/2020",
        status: "Processando",
      },
    ],

    history: [
      {
        id: "5ds45d56f6565dadsa",
        operator: "brunoacev",
        description:
          "Nesse atendimento cliente informou previsão de pagamento para dia 10/11/2024",
        createAt: "10/05/2023 - 14:35",
      },
      {
        id: "gssert99e89989zdsg",
        operator: "fulanodetal",
        description:
          "Nesse atendimento cliente informou previsão de pagamento para dia 03/11/2024",
        createAt: "10/05/2023 - 14:35",
      },
    ],
  },
];

export function getClient(): IClient[] {
  return ClientDB;
}
