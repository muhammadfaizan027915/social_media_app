"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertMessageProps = {
    children?: string;
    type?: "success" | "warning" | "danger" | "normal";
};

function AlertMessage({ children, type = "success" }: AlertMessageProps) {
    return (
        <Alert className={cn([style[type].color, style[type].background, style[type].border])}>
            <AlertCircle className={cn([style[type].color, "h-4 w-4"])} size={"1.5rem"} />
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    );
}

export default AlertMessage;

const style: Record<string, { color: string; background: string; border: string }> = {
    success: {
        color: "!text-green-600",
        background: "!bg-green-50",
        border: "!border-green-600",
    },

    warning: {
        color: "!text-orange-400",
        background: "!bg-orange-50",
        border: "!border-orange-400",
    },

    danger: {
        color: "!text-red-400",
        background: "!bg-red-50",
        border: "!border-red-400",
    },
};
