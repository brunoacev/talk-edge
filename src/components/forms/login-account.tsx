import Link from "next/link";
import { SubmitButton } from "../base-ui/submit-button";
import { Input } from "../base-ui/input";
import { Label } from "../base-ui/label";
import { Box } from "../base-ui/box";
import { Form } from "../base-ui/form";
import { loginAccountAction } from "@/actions/login-account";

export const LoginAccountForm = () => {
  return (
    <Form action={loginAccountAction}>
      <Box>
        <h2 className="font-semibold text-xl tracking-wide">
          Faça login na sua conta!
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
        <span>Não possui uma conta?</span>
        <Link href={"/create-account"} className="underline tracking-wide">
          Crie agora!
        </Link>
      </Box>

      <SubmitButton>Login</SubmitButton>
    </Form>
  );
};
