import { Chat } from "./chat";
import { Finish } from "./finish";
import { TableBills } from "./table/bills";
import { TableClient } from "./table/client";
import { TableHistory } from "./table/history";

const SystemUITable = {
  Client: TableClient,
  Bills: TableBills,
  History: TableHistory,
};

const SystemUIServices = {
  Chat,
  Finish,
};

export { SystemUITable, SystemUIServices };
