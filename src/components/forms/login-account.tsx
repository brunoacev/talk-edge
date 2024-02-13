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
          Durante o periodo de demonstração, utilize{" "}
          <span className="underline">demo@demo</span> como usuário.
        </p>
      </Box>
      <Box>
        <Label htmlFor="username">Usuário</Label>
        <Input
          type="text"
          id="username"
          name="username"
          placeholder="demo@demo"
        />
      </Box>

      <SubmitButton>Login</SubmitButton>
    </Form>
  );
};
