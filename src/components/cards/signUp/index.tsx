"use client";

import Link from "next/link";
import TextField from "@/components/common/textField";
import SubmitButton from "@/components/common/submitButton";
import AlertMessage from "@/components/common/alertMessage";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { INITIAL_FORM_STATE } from "@/lib/constants";
import { signUpAccount } from "@/actions/auth";
import { useRef, useEffect } from "react";
import { useFormState } from "react-dom";

function SignUpCard() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [state, dispatch] = useFormState(signUpAccount, INITIAL_FORM_STATE);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state.success]);

    return (
        <Card className="w-96 rounded-xl shadow-2xl">
            <CardHeader className="items-center">
                <CardTitle>Create an Account</CardTitle>
                <CardDescription className="text-center">Welcome to aSimplify, enter your information.</CardDescription>
            </CardHeader>
            <CardContent>
                <form ref={formRef} className="flex flex-col space-y-6" action={dispatch}>
                    {state.message && (
                        <AlertMessage type={state.success ? "success" : "danger"}>{state.message}</AlertMessage>
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

                    <SubmitButton>Sign Up</SubmitButton>

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
