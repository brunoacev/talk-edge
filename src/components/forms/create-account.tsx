import Link from "next/link";
import { createAccountAction } from "@/actions/create-account";
import { SubmitButton } from "../base-ui/submit-button";
import { Form } from "../base-ui/form";
import { Box } from "../base-ui/box";
import { Label } from "../base-ui/label";
import { Input } from "../base-ui/input";

export const CreateAccountForm = () => {
  return (
    <Form action={createAccountAction}>
      <Box className="flex flex-col gap-2">
        <h2 className="font-semibold text-xl tracking-wide">
          Crie sua nova conta!
        </h2>
        <p className="text-xs tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque vel
          ipsa temporibus error deleniti esse commodi mollitia, eveniet porro
          sapiente.
        </p>
      </Box>
      <Box>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email@email.com"
        />
      </Box>
      <Box>
        <Label htmlFor="password">Senha</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="********"
        />
      </Box>

      <Box className="flex-row items-center">
        <span>Já possui uma conta?</span>
        <Link href={"/login"} className="underline tracking-wide">
          Faça login agora!
        </Link>
      </Box>

      <SubmitButton>Criar</SubmitButton>
    </Form>
  );
};
