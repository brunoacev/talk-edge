"use server";

import { login } from "@/lib/session";
import { redirect } from "next/navigation";

export const loginAccountAction = async (formData: FormData) => {
  await login(formData);
  redirect("/");
};
