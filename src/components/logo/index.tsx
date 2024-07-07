import Image from "next/image";
import AsimplifyLogo from "@/assets/logo/asimplifyLogo.jpeg";
import { cn } from "@/lib/utils";

type LogoProps = {
    className?: string;
};

function Logo({ className }: LogoProps) {
    return (
        <div className={cn(["flex items-center gap-2", className])}>
            <Image src={AsimplifyLogo.src} width={50} height={50} alt="asimplify logo" />
            <h1 className="text-md font-medium">aSimplify Pvt Ltd</h1>
        </div>
    );
}

export default Logo;
