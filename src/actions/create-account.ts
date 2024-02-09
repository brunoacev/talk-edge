"use server";

import { createAccount } from "@/lib/session";
import { redirect } from "next/navigation";

export const createAccountAction = async (formData: FormData) => {
  await createAccount(formData);
  redirect("/projeto");
};
