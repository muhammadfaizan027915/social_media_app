import { Metadata } from "next";
import SignInCard from "@/components/cards/signIn";

export const metadata: Metadata = {
  title: "Sign Up - Social Media Application",
  description: "Welcome to aSimplify, create your account."
}

function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-50">
      <SignInCard />
    </div>
  );
}

export default SignIn;
