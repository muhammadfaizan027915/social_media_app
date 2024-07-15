"use client";

import Link from "next/link";
import TextField from "@/components/common/textField";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { signUpAccount } from "@/actions/auth";
import { useRef, useEffect } from "react";
import { useFormState } from "react-dom";

const initialState = { data: null, errors: null, message: null, success: false };

function SignUpCard() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [state, dispatch, isPending] = useFormState(signUpAccount, initialState);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state.success]);

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

                    <TextField id="fullName" label="Full Name" name="fullName" errors={state?.errors?.fullName} />
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
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                        errors={state?.errors?.confirmPassword}
                        inputProps={{ type: "password" }}
                    />

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
