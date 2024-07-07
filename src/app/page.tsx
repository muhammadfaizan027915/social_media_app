import { pathnames } from "@/lib/constants";
import { redirect } from "next/navigation";

export default function Home() {
    return redirect(pathnames.SIGNIN);
}
