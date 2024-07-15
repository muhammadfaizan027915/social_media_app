"use client";

import Link from "next/link";
import TextField from "@/components/common/textField";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
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
                    <TextField
                        id="emailAddress"
                        label="Email Address"
                        name="emailAddress"
                        errors={state?.errors?.emailAddress}
                    />

                    <TextField
                        id="password"
                        label="Password"
                        name="password"
                        errors={state?.errors?.password}
                        inputProps={{ type: "password" }}
                    />

                    <Button disabled={isPending}>Sign In</Button>

                    <p className="text-sm text-muted-foreground text-center">
                        Don&lsquo;t have an account ?{" "}
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
