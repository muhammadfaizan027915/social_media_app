"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpAccount } from "@/actions/auth";
import { useRef, useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = { data: null, errors: null, message: null, success: false };

function SignUpCard() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [state, dispatch, isPending] = useFormState(signUpAccount, initialState);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success])

  return (
    <Card className="w-96 rounded-xl shadow-2xl">
      <CardHeader className="items-center mb-4">
        <CardTitle>Create an Account</CardTitle>
        <CardDescription className="text-center">Welcome to aSimplify, enter your information.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} className="flex flex-col space-y-6" action={dispatch}>
          {state.message && (
            <Alert>
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" name="fullName" />
            {state?.errors?.fullName?.map((error: string) => (
              <p className="text-sm text-red-600"> {error}</p>
            ))}
          </div>

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

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" name="confirmPassword" />
            {state?.errors?.confirmPassword?.map((error: string) => (
              <p className="text-sm text-red-600"> {error}</p>
            ))}
          </div>

          <Button disabled={isPending}>Sign Up</Button>

          <p className="text-sm text-muted-foreground text-center">
            Already have an account ?{" "}
            <Link href={"/signIn"} className="text-black hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export default SignUpCard;
