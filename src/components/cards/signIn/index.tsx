"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInAccount } from "@/actions/auth";
import { useFormState } from "react-dom";

const initialState = { data: null, errors: null, message: null, success: false };

function SignInCard() {
  const [state, dispatch, isPending] = useFormState(signInAccount, initialState);
  
  return (
    <Card className="w-96 rounded-xl shadow-2xl">
      <CardHeader className="items-center mb-4">
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Sign in to your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col space-y-6" action={dispatch}>
          {state.message && (
            <Alert>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="emailAddress">Email Address</Label>
            <Input id="emailAddress" name="emailAddress" />
            {state?.errors?.emailAddress?.map((error: string) => (
              <p className="text-sm text-red-600"> {error}</p>
            ))}
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" name="password" />
            {state?.errors?.password?.map((error: string) => (
              <p className="text-sm text-red-600"> {error}</p>
            ))}
          </div>

          <Button disabled={isPending}>Sign In</Button>

          <p className="text-sm text-muted-foreground text-center">
            Don't have an account ?{" "}
            <Link href={"/signUp"} className="text-black hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export default SignInCard;
