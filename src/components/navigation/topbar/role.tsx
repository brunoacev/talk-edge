"use client";

import * as React from "react";
import { UserContext } from "@/context/user-context";

export const ShowRole = () => {
  const { role } = React.useContext(UserContext);

  return (
    <span className="text-sm font-semibold tracking-wide capitalize">
      {role}
    </span>
  );
};
