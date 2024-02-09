"use server";

import { logout } from "@/lib/session";
import { redirect } from "next/navigation";

export const logoutAccountAction = async () => {
  await logout();
  redirect("/");
};
