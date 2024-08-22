"use client";

import Link from "next/link";
import TextField from "@/components/common/textField";
import SubmitButton from "@/components/common/submitButton";
import AlertMessage from "@/components/common/alertMessage";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { INITIAL_FORM_STATE } from "@/lib/constants";
import { signInAccount } from "@/actions/auth";
import { useFormState } from "react-dom";

function SignInCard() {
    const [state, dispatch] = useFormState(signInAccount, INITIAL_FORM_STATE);

    return (
        <Card className="w-96 rounded-xl shadow-2xl">
            <CardHeader className="items-center">
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to your account.</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col space-y-6" action={dispatch}>
                    {state.message && (
                        <AlertMessage type={state.success ? "success" : "danger"}>{state.message}</AlertMessage>
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

                    <SubmitButton>Sign In</SubmitButton>

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
