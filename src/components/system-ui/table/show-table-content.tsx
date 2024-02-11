import { IClient } from "@/lib/client";
import { TableContentBills } from "./table-content-bills";
import { TableContentHistory } from "./table-content-history";
import { SystemChat } from "../chat";
import { EndService } from "../end-service";

interface IShowTableContent {
  option: string;
  clientData: IClient;
}

export const ShowTableContent = ({ option, clientData }: IShowTableContent) => {
  if (!clientData) return null;

  if (option.toLowerCase() === "bills") {
    return <TableContentBills data={clientData.bills!} />;
  }

  if (option.toLowerCase() === "history") {
    return <TableContentHistory data={clientData.history!} />;
  }

  if (option.toLowerCase() === "chat") {
    return <SystemChat />;
  }

  if (option.toLowerCase() === "finish") {
    return <EndService />;
  }

  return <div>Table Content</div>;
};
