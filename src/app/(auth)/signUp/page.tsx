import { Metadata } from "next";
import SignUpCard from "@/components/cards/signUp";

export const metadata: Metadata = {
  title: "Sign In - Social Media Application",
  description: "Sign In to your account!"
}


function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-50">
      <SignUpCard />
    </div>
  );
}

export default SignIn;
