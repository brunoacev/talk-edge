"use client";

import * as React from "react";
import { getClient } from "@/lib/client";
import { UserStatus } from "./user-status";
import { TableBils } from "./table-bills";
import { TableOptions } from "./table-options";
import { TableClient } from "./table-client";
import { ClientContext } from "@/context/client-context";
import { TableHistory } from "./table-history";
import { ChatClient } from "./chat-client";

export const SystemUI = ({ username }: { username: string }) => {
  const client = getClient();
  const ClientOptions = React.useContext(ClientContext);

  return (
    <section className="w-full h-full flex flex-col gap-2">
      <UserStatus username={username} />

      <div className="border-2 w-full h-full flex flex-col gap-4 rounded-md  dark:border-zinc-600 p-2">
        <TableClient client={client[0]} />

        <div className="flex flex-col justify-between h-full w-full gap-2">
          <TableOptions {...ClientOptions} />

          {ClientOptions.option === "bills" && <TableBils client={client[0]} />}

          {ClientOptions.option === "history" && (
            <TableHistory client={client[0]} />
          )}

          {ClientOptions.option === "chat" && <ChatClient />}
        </div>
      </div>
    </section>
  );
};
