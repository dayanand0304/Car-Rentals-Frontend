import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import {
  registerSchema,
  type RegisterSchemaType,
} from "../schemas/auth.schema";

import { useRegisterMutation } from "../hooks/use-auth-mutations";

import { useAuthStore } from "../store/auth.store";

const RegisterForm = () => {
  const navigate = useNavigate();

  const setAuth = useAuthStore(
    (state) => state.setAuth
  );

  const registerMutation =
    useRegisterMutation();

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (
    values: RegisterSchemaType
  ) => {
    try {
      const response =
        await registerMutation.mutateAsync(
          values
        );

      setAuth(response.token, response.user);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter name"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>

                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={
                registerMutation.isPending
              }
            >
              {registerMutation.isPending
                ? "Creating account..."
                : "Register"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;