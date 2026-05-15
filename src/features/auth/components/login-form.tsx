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
  loginSchema,
  type LoginSchemaType,
} from "../schemas/auth.schema";

import { useLoginMutation } from "../hooks/use-auth-mutations";

import { useAuthStore } from "../store/auth.store";

const LoginForm = () => {
  const navigate = useNavigate();

  const setAuth = useAuthStore(
    (state) => state.setAuth
  );

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),

    defaultValues: {
      customerEmail: "",
      password: "",
    },
  });

  const loginMutation = useLoginMutation();

  const onSubmit = async (
    values: LoginSchemaType
  ) => {
    console.log("FORM SUBMITTED");

    console.log(values);

    try {
      console.log("BEFORE API");

      const response =
        await loginMutation.mutateAsync(values);

      console.log("AFTER API");

      console.log(response);

      setAuth(response.token, {
        id: 1,
        customerName: "Customer Name",
        customerEmail: values.customerEmail,
        role: "CUSTOMER",
      });

      navigate("/dashboard");

    } catch (error) {
      console.error("LOGIN ERROR");

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
              name="customerEmail"
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
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending
                ? "Logging in..."
                : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;